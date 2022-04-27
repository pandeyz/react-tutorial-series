// import React from 'react';

function CustomDropDown(props) {
  return (
    <select style={( props.styleObj && props.styleObj.width ) ? { width: props.styleObj.width }: null}>
      <option value="">{( props.defaultText ) ? props.defaultText: '-- Select --'}</option>
      {
        ( props.dataArr && props.dataKey && props.dataVal )
        ?
          props.dataArr.map(data => <option value={data[props.dataKey]}>{data[props.dataVal]}</option>)
        :
          null
      }
    </select>
  )
}

function sayHello() {
  return 'hello world';
}

function StyleComponent(props) {
  return (
    <>
      <p style={props.styleObj}>This is a Style Component</p>
      <p style={props.styleObj}>This is a Style Component</p>
    </>
  )
}

function App() {

  let states1 = [
    {stateId: 1, stateName: 'Andhra Pradesh'}, 
    {stateId: 2, stateName: 'Arunachal Pradesh'}, 
    {stateId: 3, stateName: 'Assam'},
    {stateId: 4, stateName: 'Bihar'},
  ]

  let states2 = [
    {id: 1, name: 'Andhra Pradesh'}, 
    {id: 2, name: 'Arunachal Pradesh'}, 
    {id: 3, name: 'Assam'},
    {id: 4, name: 'Bihar'},
  ]

  let states3 = [
    {sid: 1, sname: 'Assam'},
    {sid: 1, sname: 'Bihar'},
  ]

  return (
    <div className="container" style={{ marginTop: '20px' }}>
      <div>{sayHello()}</div>
      <h4>First Calling</h4>
      <CustomDropDown
        dataArr={states1}
        dataKey={'stateId'}
        dataVal={'stateName'}
      />
      <hr />
      <h4>Second Calling</h4>
      <CustomDropDown
        defaultText={'Select State'}
        styleObj={{ width: '50%' }}
        dataArr={states2}
        dataKey={'id'}
        dataVal={'name'}
      />
      <hr />
      <h4>Third Calling</h4>
      <CustomDropDown
        defaultText={'Select State Name'}
        styleObj={{ width: '100%' }}
        dataArr={states3}
        dataKey={'sid'}
        dataVal={'sname'}
      />
      <hr/>
      <StyleComponent
        styleObj={{ color: 'red', fontSize: 20 }}
      />
      <hr/>
      <StyleComponent
        styleObj={{ fontSize: 20 }}
      />
    </div>
  );
}

export default App;