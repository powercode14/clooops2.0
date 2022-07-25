const CloudSelect = () => {
  return (
    <div className="item cloud">
      <select className="fm-control round">
        <option selected>분류</option>
        <option>Azure</option>
        <option>AWS</option>
        <option>NCP</option>
        <option>GCP</option>
      </select>
    </div>
  );
};

export default CloudSelect;
