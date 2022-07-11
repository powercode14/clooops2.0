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
      topMenuOpen: false,
      user: null,
      profile: null,
      custId: null,
      subs: null,
      subsId: null,
      subsArr: null,
      entitlementId: null,
      setter(obj) {
        set(() => obj);
      },
      setLoading(loading) {
        set((data) => {
          if (typeof loading === 'boolean') {
            return { loading };
          } else if (typeof loading === 'function') {
            return { loading: loading(data.loading) };
          } else {
            return { loading: !data.loading };
          }
        });
      },
      setUser(email) {
        get().setter({ user: email });
      },
      setProfile(profile) {
        get().setter({ profile });
      },
      setCustId(custId) {
        get().setter({ custId });
      },
      setCloudTypeCd(cloudTypeCd) {
        get().setter({ cloudTypeCd });
      },
      setSubs(subs) {
        get().setter({ subs });
      },
      setSubsArr(subsArr) {
        get().setter({ subsArr });
      },
      setSubsId(subsId) {
        get().setter({ subsId });
      },
      setEntitlementId(entitlementId) {
        get().setter({ entitlementId });
      },
      selectCust(customer) {
        const { id: custId, cloudTypeCd } = customer;
        get().setCustId(custId);
        get().setCloudTypeCd(cloudTypeCd);
        get().setSubs();
        get().setSubsId();
        get().setEntitlementId();
      },
      selectSubs(subs) {
        get().setSubs(subs);
        get().setSubsId(subs?.id ?? null);
        get().setEntitlementId(subs?.entitlementId ?? null);
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
              callback(res.data.message);
            }
          });
        if (loginResult) {
          const { profile } = await getUserProfile();
          if (profile) {
            get().setProfile(profile);
            get().selectCust(profile?.customers[0]);
            get().setSubsArr(
              get().subsId
                ? [get().entitlementId]
                : profile.companyProfile.find(
                    ({ id }) => id === profile?.customers[0]?.id,
                  )?.subs ?? null,
            );
          }
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
