from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome()
driver.get("localhost:5000/uomocktrial.html")#put here the adress of your page
driver.find_element_by_css_selector('.g-recaptcha').click()