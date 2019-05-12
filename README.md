# FIS
FIS calculates driving time between major cities in South Africa
This is a one page Angular web application using Angular 6 version. 
The application invokes a Spring bootREST APIs. 
All calculations happens in the spring boot application.
The spring boot application uses internal h2 database for data storage and JPa for ROM.
The application calculates the driving time between the major cities in South Africa, the end user is be able to enter the average speed at which he drives and sees the resulting estimated travel time on the screen. 
The application also takes into account that for every 2 hours that the driver drives he/she must take a 20 minute break.
No authentication\security is done.
Code is Unit tested
Maven and Java 8 are used.

Please note to run this application you will need to edit hosts file by adding the following line

127.0.0.1       fistest.co.za
