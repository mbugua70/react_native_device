class Places {
    constructor(title, location, imageUri, address){
        this.title = title;
        this.location = location;
        this.imageUri = imageUri;
        this.address = address;
        this.id = new Date().toString() + Math.random().toString();
    }
}