import { LightningElement, wire } from "lwc";
import Name_Field from "@salesforce/schema/Operating_Hours__c.Name";
import Start_Date_Field from "@salesforce/schema/Operating_Hours__c.Start_Date__c";
import End_Date_Field from "@salesforce/schema/Operating_Hours__c.End_Date__c";
import getOperatingHours from "@salesforce/apex/OperatingHours.getOperatingHours";

const columns = [
  { label: "Name", fieldName: Name_Field.fieldApiName, type: "text" },
  {
    label: "Start Date",
    fieldName: Start_Date_Field.fieldApiName,
    type: "date"
  },
  { label: "End Date", fieldName: End_Date_Field.fieldApiName, type: "date" }
];

export default class OperatingHours extends LightningElement {
  columns = columns;
  @wire(getOperatingHours)
  operatingHours;
}
