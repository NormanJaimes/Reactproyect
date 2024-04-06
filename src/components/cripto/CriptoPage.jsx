import { useParams } from 'react-router-dom';
import Criptomoneda from './Criptomoneda';
import usePetition from '../../hooks/usePetition';

export default function CriptoPage() {
  // const [cripto, setCripto] = useState({});

  const params = useParams();
  // const API_URL = import.meta.env.VITE_API_URL;
  // fetch(`${API_URL}assets/${params.id}`)
  //   .then((res) => res.json())
  //   .then((data) => setCripto(data.data));

  const cripto = usePetition(`assets/${params.id}`);
  // const cripto = usePetition(`assets`);
  // const history = usePetition(`assets/${params.id}/history?interval=d1`);

  console.log(cripto);

  return (
    <>
      {/* <div>CriptoPage </div> */}
      {cripto && (
        <>
          <div>CriptoPage {cripto.id}</div>
          <Criptomoneda
            key={cripto.id}
            id={cripto.id}
            name={cripto.name}
            priceUsd={cripto.priceUsd}
          ></Criptomoneda>
        </>
      )}
    </>
  );
}
