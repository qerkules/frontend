import styles from "./styles.module.css";
import { allcars } from "../../data/data";
import Card from "../../components/card/Card";
import TextField from '@mui/material/TextField';

const Allcars = () => {
  const currencies = [
    {
      value: 'default',
      label: '',
    },
    {
      value: 'mercedes',
      label: 'Mercedes',
    },
    {
      value: 'bmw',
      label: 'Bmw',
    },
    {
      value: 'landrover',
      label: 'Land Rover',
    },
    {
      value: 'hyundai',
      label: 'Hyundai',
    },
    {
      value: 'kia',
      label: 'Kia',
    },
  ];
  
  return (
    <div className={`${styles.container}`}>
      <h1 className={`${styles.title}`}>All Available Cars</h1>
      <div className={`${styles.mainSection}`}>
        <div className={`${styles.cardContainer}`}>
          {allcars.map((car) => {
            return <Card car={car} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Allcars;
