import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './App.css'
import AllQuestion from './components/allQuestion';
import CreateNew from './components/CreateNew';

function App() {
  return (
    <div className="App">
      <Tabs>
        <TabList>
          <Tab>
            <p>Instructions</p>
          </Tab>
          <Tab>
            <p>All Question</p>
          </Tab>
          <Tab>
            <p>Add new question</p>
          </Tab>

        </TabList>

        <TabPanel>
          <div className="panel-content">
            <h2>Introduction</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <AllQuestion />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <CreateNew />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
