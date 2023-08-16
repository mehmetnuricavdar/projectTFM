public with sharing class OperatingHours {
    @AuraEnabled(cacheable=true)
    public static List<Operating_Hours__c> getOperatingHours() {
        return [
            SELECT Name, Start_Date__c, End_Date__c
            FROM Operating_Hours__c
            WITH SECURITY_ENFORCED
            ORDER BY Name
        ];
    }
}