import { Component } from "react";
import AppColors from "../../view/_constants/AppColors";

export default class AbstractInnerPage extends Component {
  get showInOnlyAdminMode() {
    return true;
  }

  get color() {
    return this.showInOnlyAdminMode ? AppColors.Issuer : AppColors.Receiver;
  }
}
