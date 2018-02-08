import templateHTML from "./src/templates/main.html!text"
import axios from 'axios'
import mustache from 'mustache'
import config from '../config.json'

console.log(config);


export async function render() {
	var sheets = (await (axios.get(config.docDataUrl))).data.sheets;
	var trips = sheets.trips;
	console.log(trips)
    return templateHTML;
}