import templateHTML from "./src/templates/main.html!text"
import axios from 'axios'
import mustache from 'mustache'
import config from '../config.json'
import {cleannumber,twodecimals} from './js/lib/utils' 


var germany = {
	imports: 75000,
	exports: 49000
}

var domain = 150000;

var ukworldtrade = 1100000;

function getInclination(t) {
	if (t.imports > t.exports) {
		var angle = (((t.imports - t.exports) / (t.imports + t.exports)) * 45);
		return `-${angle}deg`
	} else if (t.imports < t.exports) {
		var angle = (((t.exports - t.imports) / (t.imports + t.exports)) * 45);
		return `${angle}deg`;
	}
}

function getWidths(t){
	t.imports = cleannumber(t.ukimports);
	t.exports = cleannumber(t.ukexports);
	t.iwidth = `${100 * (t.imports / domain)}%`
	t.ewidth = `${100 * (t.exports / domain)}%`
	t.inclination = getInclination(t)
	t.proportion = (t.imports + t.exports) / ukworldtrade;
	t.squareside = `${100 * Math.sqrt(t.proportion)}%`;
	t.importsLabel = cleannumber(t.ukimports/1000) + "bn";
	t.exportsLabel = cleannumber(t.ukexports/1000) + "bn";
	t.roundtrip = cleannumber(t.onewaykm) * 2;
}

export async function render() {
	var sheets = (await (axios.get(config.docDataUrl))).data.sheets;
	var trips = sheets.trips;

	trips.forEach(function(t){
		getWidths(t);
	})
	console.log(trips)

	var html = mustache.render(templateHTML,{'trips': trips})

    return html;
}