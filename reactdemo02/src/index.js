import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './commentDetail';
import ApprovalCard from './approvalCard';

const App = () => {
  return (
  <div className="ui container comments">
    <ApprovalCard><h4>Are you sure you want to do this?</h4>
    </ApprovalCard>
    <ApprovalCard />
    <CommentDetail 
      author="Elf"
      timeAgo="Today at 1pm"
      content="Elves are very nice people"
      avatar={faker.image.image()} 
    />
    <ApprovalCard />
    <CommentDetail 
      author="Vamp"
      timeAgo="Today at 2pm"
      content="Vamps like to sleep during the day"
      avatar={faker.image.image()} 
    />  

    <ApprovalCard />
    <CommentDetail 
      author="Cat"
      timeAgo="Today at 3pm" 
      content="Cats are very selfish"
      avatar={faker.image.image()} 
    /> 
    
  </div>
    );
  };
  ReactDOM.render(
      <App />,
      document.querySelector('#root')
  );

export default App;
