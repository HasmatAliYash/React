
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LivingThings1 from './1-Assignment/components/FB-LivingThings';
import LivingThings2 from './2-Assignment/components/FB-LivingThings';
import LivingThings3 from './3-Assignment/components/CB-LivingThings';
import LivingThings4 from './4-Assignment/components/CB-LivingThings';

function App() {
  return (
    <div className="container">
      <h4 className="mb-4"><span className="text-success">
        Assignment-1:- </span>Components are displying using "Fuctional Componests" with the help of <span className="text-danger">"UseState" Hook</span></h4>
      <LivingThings1 />
      <hr className="mb-5"></hr>

      <h4 className="mb-4"><span className="text-success">
        Assignment-2:- </span>Components are displying using "Fuctional Componests" with the help of <span className="text-danger">"PROPS"</span></h4>
      <LivingThings2 />
      <hr className="mb-5"></hr>

      <h4 className="mb-4"><span className="text-success">
        Assignment-3:- </span>Components are displying using "Class Componests" with the help of <span className="text-danger">"State"</span></h4>
      <LivingThings3 />
      <hr className="mb-5"></hr>

      <h4 className="mb-4"><span className="text-success">
        Assignment-4:- </span>Counter using Function as  <span className="text-danger">"PROPS"</span></h4>
      <LivingThings4 />
    </div>
  )
}

export default App;
