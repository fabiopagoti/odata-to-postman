GET http://services.odata.org/V4/TripPinService/People('russellwhyte')/Microsoft.OData.SampleService.Models.TripPin.GetFavoriteAirline()

Accept: application/json

{
"@odata.context": "serviceRoot/$metadata#People/$entity",
"@odata.id": "serviceRoot/People('russellwhyte')",
"@odata.etag": "W/"08D1694BF26D2BC9"",
"@odata.editLink": "serviceRoot/People('russellwhyte')",
"UserName": "russellwhyte",
"FirstName": "Russell",
"LastName": "Whyte",
"Emails": [
"Russell@example.com",
"Russell@contoso.com"
],
"AddressInfo": [
{
"Address": "187 Suffolk Ln.",
"City": {
"CountryRegion": "United States",
"Name": "Boise",
"Region": "ID"
}
}
],
"Gender": "Male",
"Concurrency": 635404797346655200
}
