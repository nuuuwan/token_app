import { Component } from "react";

import AppColors from "../../view/_constants/AppColors";

export default class AbstractInnerPage extends Component {
  get showInOnlyIssuerMode() {
    return true;
  }

  get color() {
    return this.showInOnlyIssuerMode ? AppColors.Issuer : AppColors.Consumer;
  }
}
