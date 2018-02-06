# Custom Maps

Easy way to get your custom skinned google maps in your website


## Example

Default Style
```
https://snazzymaps.com/style/151/ultra-light-with-labels
```
![Custom Maps in action](https://i.imgur.com/x96Lxt2.png) 
```
https://snazzymaps.com/style/2/midnight-commander
```
![Custom Maps in action](https://i.imgur.com/FBW243k.png)

Find more at [SnazzyMaps](https://snazzymaps.com)


### Prerequisites

Google maps script tag

```
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR-WEBSITE-GOOGLE-MAPS-KEY-HERE"></script>

```

### Installing

Copy custommaps.min.js & custommaps.config.json (located in the [Dist](https://github.com/rafamarins/custommaps/tree/master/dist) folder) to your project and invoke initMap(Address, MapContainer).

```

new custommaps().initMap('Address', document.getElementById('map'))

```
## Config

Add your configs to the custommaps.config.json file.

## Extras

Scripts && Styles being processed with my Deploiii gulp set up. You should check that out.
[Deploiii](https://github.com/rafamarins/deploiii)

## Authors

* **Rafael Marins** - *Initial work* - [Rafael Marins](https://github.com/rafamarins)
