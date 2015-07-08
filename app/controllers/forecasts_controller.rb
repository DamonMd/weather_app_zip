class ForecastsController < ApplicationController

  def index
  end

  def new
    @zip_code = params[:id]

    api_one_f = Unirest.get('http://api.openweathermap.org/data/2.5/weather?zip=' + @zip_code + ',us&units=imperial',
	  		headers:{
			    "Accept" => "application/json"
			  }).body

    api_one_c = Unirest.get('http://api.openweathermap.org/data/2.5/weather?zip=' + @zip_code + ',us&units=metric',
    	  headers:{
    			"Accept" => "application/json"
    		}).body

    api_two = Unirest.get('http://api.wunderground.com/api/69f4aa73fb9c716b/forecast/geolookup/conditions/q/' + @zip_code + '.json',
	  		headers:{
			    "Accept" => "application/json"
			  }).body

    @avg_f = average_temp(api_one_f["main"]["temp"], api_two["current_observation"]["temp_f"])
    @avg_c = average_temp(api_one_c["main"]["temp"], api_two["current_observation"]["temp_c"])

    @city = api_two["location"]["city"]
    @weather = api_two["current_observation"]["weather"]
  end

  def average_temp(temp1, temp2)
    return (temp1 + temp2) / 2
  end

end
