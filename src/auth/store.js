import createStore from 'zustand';
import { postAPI, setToken, getUserProfile } from 'common/clooOpsApis';
import persist, { purge } from './persist';

/* eslint-disable import/prefer-default-export */
/**
 * user, profile, custId, subs, subsId, entitlementId,
 * setter(key, value), setUser(email), setProfile(profile), setCustId(custId), setSubs(subs), setSubsId(subsId),
 * setEntitlementId(entitlementId), selectCust(custId), selectSubs(subs)
 * signIn, signOut
 */
const useStore = createStore(
  persist(
    {
      key: 'auth',
      denylist: ['loading'],
    },
    (set, get) => ({
      loading: false,
      user: null,
      profile: null,
      custId: null,
      subs: null,
      subsId: '',
      subsArr: null,
      entitlementId: '',
      cloudTypeCd: null,
      setLoading(loading) {
        set((data) => {
          if (typeof loading === 'boolean') {
            return { loading };
          }
          if (typeof loading === 'function') {
            return { loading: loading(data.loading) };
          }
          return { loading: !data.loading };
        });
      },
      setUser(email) {
        set(() => ({ user: email }));
      },
      setProfile(profile) {
        set(() => ({ profile }));
      },
      setCustId(custId) {
        set(() => ({ custId }));
      },
      setCloudTypeCd(cloudTypeCd) {
        set(() => ({ cloudTypeCd }));
      },
      setSubs(subs) {
        set(() => ({ subs }));
      },
      setSubsArr(subsArr) {
        set(() => ({ subsArr }));
      },
      setSubsId(subsId) {
        set(() => ({ subsId }));
      },
      setEntitlementId(entitlementId) {
        set(() => ({ entitlementId }));
      },
      selectCust(customer) {
        const { id: custId, cloudTypeCd } = customer;
        set(() => ({
          custId,
          cloudTypeCd,
          subs: null,
          subsId: null,
          entitlementId: null,
        }));
      },
      selectSubs(subs) {
        get().setSubsId(subs?.id ?? '');
        get().setEntitlementId(subs?.entitlementId ?? '');
      },
      async init() {
        const { profile } = await getUserProfile();
        if (profile) {
          set(() => ({ profile }));
          get().selectCust(profile?.customers[0]);
          get().setSubsArr(
            get().subsId
              ? [get().entitlementId]
              : profile.companyProfile.find(
                  ({ id }) => id === profile?.customers[0]?.id,
                )?.subs ?? null,
          );
        }
      },
      async signIn(params, callback) {
        const loginResult = await postAPI({ url: '/login', params })
          .then((res) => {
            const expires = new Date();
            expires.setHours(expires.getHours() + 1);
            if (res.status === 200) {
              const { token } = res.data;
              get().setUser(params.email);
              setToken(token);

              return true;
            }
            return false;
          })
          .catch(({ response: res }) => {
            if (res.status < 500) {
              callback(res.data);
            }
          });
        if (loginResult) {
          await get().init();
          callback();
        }
      },
      msLogin: async (params, callback) => {
        const loginResult = await postAPI({ url: '/mslogin', params })
          .then((res) => {
            const expires = new Date();
            expires.setHours(expires.getHours() + 1);
            if (res.status === 200) {
              const { token } = res.data;
              get().setUser(params.email);
              setToken(token);
              return true;
            }
            return false;
          })
          .catch(({ response: res }) => {
            if (res.status < 500) {
              callback(res.data);
            }
          });
        if (loginResult) {
          await get().init();
          callback();
        }
      },
      signOut() {
        set(() => ({
          user: null,
          profile: null,
          custId: null,
          subs: null,
          subsId: null,
          entitlementId: null,
        }));
        purge();
      },
    }),
  ),
);

export default useStore;
