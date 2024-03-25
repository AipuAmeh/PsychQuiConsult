import { useQuery } from "@apollo/client";

import { QUERY_ALL_PATIENTS } from "../../utils/queries";

const ViewPatients = () => {
  const { data } = useQuery(QUERY_ALL_PATIENTS);
  console.log('PATIENT DATA:',data);

  return <div className="mb-80 pb-20 pl-5">Viewing My Patients</div>;
};

export default ViewPatients;
