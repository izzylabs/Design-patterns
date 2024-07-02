import React from 'react';
import './App.css';
import Header from './components/Header/header';
import { AgileStrategy } from './strategies/AgileStrategy';
import { WaterfallStrategy } from './strategies/WaterfallStrategy';
import { Task } from './models/Task';
import { Project } from './models/Project';
import ProjectComponent from './management/Components/TaskManagment/Project';
import { AppleFactory } from './management/Factories/AppleFactory';
import { SamsungFactory } from './management/Factories/SamsungFactory';
import { Product } from './management/Models/Product';
import ProductList from './components/TaskManagment/ProductManagment/ProductList';
import Footer from './components/Footer/footer';

const App: React.FC = () => {
  const agile = new AgileStrategy();
  const waterfall = new WaterfallStrategy();

  const task1 = new Task('Develop login feature', 5, agile);
  const task2 = new Task('Test login feature', 3, waterfall);
  const task3 = new Task('Design database schema', 2, agile);

  const project = new Project('User Authentication System');
  project.addTask(task1);
  project.addTask(task2);
  project.addTask(task3);

  const appleFactory = new AppleFactory();
  const samsungFactory = new SamsungFactory();

  const appleLaptop = appleFactory.createLaptop();
  const samsungLaptop = samsungFactory.createLaptop();
  const appleSmartphone = appleFactory.createSmartphone();
  const samsungSmartphone = samsungFactory.createSmartphone();

  const products: Product[] = [appleLaptop, samsungLaptop, appleSmartphone, samsungSmartphone];

  return (
      <div className="App">
          <Header />
          <h1> </h1>
          <ProjectComponent project={project} />

          <h1>Product Management System</h1>
          <ProductList products={products} />

          <Footer />
      </div>
  );
};

export default App;