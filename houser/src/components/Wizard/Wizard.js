import React, { Component } from 'react';
import './Wizard.css';

import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import StepOne from '../WizardSteps/StepOne';
import StepTwo from '../WizardSteps/StepTwo';
import StepThree from '../WizardSteps/StepThree';

import { connect } from 'react-redux';
import { resetWizardData } from '../../ducks/reducer';

class Wizard extends Component {

  cancel(){
    this.props.resetWizardData();
  }

  render() {

    let steps = (
      <Switch>
        <Route path="/wizard/step1" component={StepOne} />
        <Route path="/wizard/step2" component={StepTwo} />
        <Route path="/wizard/step3" component={StepThree} />
      </Switch>
    )
    
    return (
      <div className="wizard below-header">
        <div className="heading">
          <h2>Add New Listing</h2>
          <Link to="/"><button onClick={() => this.cancel()} className="pink btn">Cancel</button></Link>
        </div>

        { steps }

      </div>
    );
  }
}

export default connect(null, { resetWizardData })(Wizard);