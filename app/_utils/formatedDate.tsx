import { FunctionComponent } from "react";

interface Props {
  dateString: string
}

const FormatedDate: FunctionComponent<Props> = ({dateString}) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });

  return (
    <>
      <span>{day}</span> {month} 
    </>
  );
};

export default FormatedDate
