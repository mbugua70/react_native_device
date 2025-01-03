const GOOGLE_API_KEY = "AIzaSyCf2J931v0pUUgl8-NZF21axRpp_bMg8uk";

export function getGoogleMapPreview (lat,long){
    console.log(lat, long);
    const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${long}&key=${GOOGLE_API_KEY}
`;

    return mapPreviewUrl;
}