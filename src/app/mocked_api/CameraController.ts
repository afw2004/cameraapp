export class CameraController {
	constructor() {
	}
	
	public cameras() {
		return {
			status: 200,
			body: this.getRandomPictures(4)
		}
	}

	private getRandomPictures(numCameras) {
		const cameraResponses = [];
		const numImages = this.assetImages.length;
		for (let i = 0; i < numCameras; ++i) {
			const imgIndex = Math.floor(Math.random() * numImages);
			const passfail = Math.floor(Math.random() * 2);
			
			cameraResponses.push({
				img: this.assetImages[imgIndex],
				pass: passfail ? true : false
			});
		}
		return cameraResponses;
	}
	
	private assetImages = [
		'/assets/img1.svg',
		'/assets/img2.svg',
		'/assets/img3.svg',
		'/assets/img4.svg',
		'/assets/img5.svg',
		'/assets/img6.svg',
		'/assets/img7.svg',
		'/assets/img8.svg',
		'/assets/img9.svg',
		'/assets/img10.svg'
	];
}