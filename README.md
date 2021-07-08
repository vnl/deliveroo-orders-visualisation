# Deliveroo Orders Visualisation

Scrape your Deliveroo orders to visualise the data

## Vizualizing your order history

Analysing all the food orders [Deliveroo](https://deliveroo.co.uk/)


## Dependencies

* [requests](http://docs.python-requests.org/en/master/)
* [beautifulsoup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)
* [pandas](https://pandas.pydata.org/pandas-docs/stable/index.html)


## Working


* Go to the URL of order history for deliveroo.

> Eg. https://deliveroo.co.uk/orders

* Then, open the Network's Tab in Developer Console

* Copy the request for the web page as CURL command

* Use this [little tool](https://curl.trillworks.com/) to get the python code

* Use the cookies obtained from above in your code
* Now on the page click on "View More" 
* The network tab now loads 2 new requests called 'order' with limit and offset. 
* Click the above request to get the API url - ...api.uk.deliveroo.com/orderapp/v1/users/{UserNumber}/orders?limit...
  * Ex: Request URL: https://api.uk.deliveroo.com/orderapp/v1/users/123456789/orders?limit=26&offset=25
* Copy this 'UserNumber'



## Add the following:


Update the below code snippet in the script with your own values for cookies and User Number.

```python
    cookies = {
                    'cookie': 'your cookies here',
    }
```

```python
    user = {
                    'user': 'your user number here',
    }
```

* I currently save csv file of the orders orders

## TODO's

- [ ] Store the data directly into MongoDB Atlas
- [ ] Use a food database API to gather nutrition value of each meal and items.
- [ ] Cleanup and make `Items Ordered` more structured so that it easy to anayze that data field.

## License

This project is under the [MIT](LICENSE) License.

