const DashboardAdminPage = () => {
  let whichProm = "";

  const handleProm = async () => {
    whichProm = e.target.parentNode.id
  };

  const handleRetrieveProm = async () => {
    await DashboardService.LoadPromDashboard(whichProm).then((response) => {});
  };
};

export default DashboardAdminPage;
