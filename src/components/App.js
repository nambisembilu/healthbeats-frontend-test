import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import '../App.css';
import ToggleBox from './ToggleBox';

const Eats = ["Breakfast", "Lunch", "Dinner", 'Supper'];
const Frequency = ["Day(s)", "Week(s)", "Month(s)"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: '',
    };
    this.selectScheduleTime = React.createRef();
    this.selectScheduleFreq = React.createRef();
  }

  TimeSlotClick() {
    this.setState({ formType: this.selectScheduleTime.current.props.formType })
    this.selectScheduleTime.current.setState({ isActive: true });
    this.selectScheduleFreq.current.setState({ isActive: false });
  }

  FrequencyClick() {
    this.setState({ formType: this.selectScheduleFreq.current.props.formType })
    this.selectScheduleFreq.current.setState({ isActive: true });
    this.selectScheduleTime.current.setState({ isActive: false });
  }

  render() {
    return (
      <div className="App">
        <Container>
          <p className="text-left">Select Patient self monitoring schedule *</p>
          <div className="FlexContainer">
            <div className="item">
              <ToggleBox ref={this.selectScheduleTime} formType="TimeSlot" click={this.TimeSlotClick.bind(this)} shape="Rectangle" radius="left" title="By Time Slot" />
            </div>
            <div className="item">
              <ToggleBox ref={this.selectScheduleFreq} formType="Frequency" click={this.FrequencyClick.bind(this)} shape="Rectangle" radius="right" title="By Frequency" />
            </div>
          </div>
          <div className={this.state.formType === 'TimeSlot' ? '' : 'Hide'}>
            <div className="FlexContainer">
              {Eats.map(Eat => {
                return <div className="item">
                  <ToggleBox shape="Square" title={"Before " + Eat} value={"Before " + Eat}/>
                </div>
              })}
            </div>
            <div className="FlexContainer">
              {Eats.map(Eat => {
                return <div className="item">
                  <ToggleBox shape="Square" title={"After " + Eat} value={"After " + Eat} />
                </div>
              })}
            </div>
          </div>
          <div className={this.state.formType === 'Frequency' ? '' : 'Hide'}>
            <Form className="mt-4 ml-2" >
              <Row form>
                <Col sm={1}>
                  <FormGroup>
                    <Input type="number" min="1" defaultValue="1" placeholder="with a placeholder" />
                  </FormGroup>
                </Col>
                <Col sm={1}>
                  <Label className="mt-2" for="exampleSelect"> times a </Label>
                </Col>
                <Col sm={2}>
                  <Input type="select" name="select" id="exampleSelect">
                    {Frequency.map(Freq => {
                      return <option>{Freq}</option>
                    })}
                  </Input>
                </Col>
              </Row>
            </Form>
          </div>
          <Button className={!this.state.formType ? 'Hide' : ''} id="ButtonSave" color="primary">Save</Button>
        </Container>
      </div>
    );
  }
}

export default App;
