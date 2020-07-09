'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Businesses',
			[
				// NOTE: Tags may be inaccurate compared to real life seed data

				// Tags were applied retroactively for some businesses, since those
				// businesses already had excellent video reviews but didn't fit
				// into any particular tag

				/* 1 */ {
					name: 'Marufuku Ramen SF',
					categoryId: 2, // Ramen
					address: '1581 Webster St, Ste 235, San Francisco, CA 94115',
					lat: 37.78478,
					lon: -122.43139,
					photoContent:
						'https://s3-media0.fl.yelpcdn.com/bphoto/WiaA3cGOciKGU1099ViqeQ/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/2lUFO5HWD7_RLDWlT5Nvuw/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/GKFnVvxqNIaEu5CRwXecXQ/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/Rq0969BiqzyM3oRBIBzzLA/o.jpg',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				/* 2 */ {
					name: 'Ramen Yamadaya',
					categoryId: 2, // Ramen
					address: '1728 Buchanan St San Francisco, CA 94115',
					lat: 37.78607,
					lon: -122.42969,
					photoContent:
						'https://s3-media0.fl.yelpcdn.com/bphoto/qea_91m5jPvwShLF48Z6Xg/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/mT8y8eqLYs6D9jk2w0B8qg/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/7QC0TkhIG_64a5PBYGs4sg/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/oAi0y-3aet05olyuSDHbGg/o.jpg',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				/* 3 */ {
					name: 'The House',
					categoryId: 3, // American Grill
					address: '1230 Grant Ave, San Francisco, CA 94133',
					lat: 37.79869,
					lon: -122.40711,
					photoContent:
						'https://s3-media0.fl.yelpcdn.com/bphoto/UzrNIkdGTZ1-cXuQDsKUmA/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/5SCcuSSC7_ivmRFR3i_l5A/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/59C7YiFTPLBCiIZsqRUAGA/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/VzVjR_JpC2Rr3DnuNvwePg/o.jpg',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				/* 4 */ {
					name: 'Burma Superstar',
					categoryId: 12, // Latin
					address: '309 Clement St, San Francisco, CA 94118',
					lat: 37.782791,
					lon: 122.46254,
					photoContent:
						'https://s3-media0.fl.yelpcdn.com/bphoto/Rt-zOS-uNY0cafsq1UeoDw/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/DYKu9PS3i6g-rQLG1DNXqw/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/twmWh6YLdAv8UpxJoHDCBQ/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/yMmazueWKgPYIJ3lWgyYyw/o.jpg',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				/* 5 */ {
					name: 'San Tung',
					categoryId: 5, // Chinese
					address: '1031 Irving St, San Francisco, CA 94122',
					lat: 37.76371,
					lon: -122.468994,
					photoContent:
						'https://s3-media0.fl.yelpcdn.com/bphoto/coGgEP6AhRPUf53MMTc5tQ/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/Ns-9v6cKI0YMGITTMeZBuQ/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/rZhBlAewon83K9yP4sRiGw/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/2kBmAaeAbGciK1_jpb4ztw/o.jpg',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				/* 6 */ {
					name: 'Hog Island Oyster Co',
					categoryId: 16, // Seafood
					address: '1 Ferry Bldg, Shop 11, San Francisco, CA 94111',
					lat: 37.796177,
					lon: -122.393611,
					photoContent:
						'https://s3-media0.fl.yelpcdn.com/bphoto/7hxlIEy0kq1k57wOJkW0Og/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/Kozd3NJMSaT6S3J2kYAc1g/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/utathIDHg791xMwYuxxtTA/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/WRwbbbP18SxEue54SmIAsw/o.jpg',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				/* 7 */ {
					name: 'Gary Danko',
					categoryId: 14, // Cajun
					address: '800 N Point St, San Francisco, CA 94109',
					lat: 37.805978,
					lon: -122.420592,
					photoContent:
						'https://s3-media0.fl.yelpcdn.com/bphoto/ioZV2k-cxUKxsT6if-JL7A/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/CAprIoeKQAYV9oUw9xBbmA/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/_dDCVo_vLpM79Y3mgyMiYg/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/pcMJNQwqz2oKcf1XC9iBcw/o.jpg',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				/* 8 */ {
					name: 'Sushirrito',
					categoryId: 8, // Sushi
					address: '226 Kearny St, San Francisco, CA 94108',
					lat: 37.79026,
					lon: -122.40388,
					photoContent:
						'https://s3-media0.fl.yelpcdn.com/bphoto/32yNKzjDXawK7XoIdQ74ug/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/jlwPGk7UjuViwQeTgAhBUQ/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/sBQyUf-91ugx1EypklHIQA/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/ErvnoWxx55Igt4yNh_FQNQ/o.jpg',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				/* 9 */ {
					name: 'The Bird',
					categoryId: 7, // Chicken Wings
					address: '115 New Montgomery St, San Francisco, CA 94105',
					lat: 37.7872,
					lon: -122.4001,
					photoContent:
						'https://s3-media0.fl.yelpcdn.com/bphoto/LM3diNJ8dQ2hrchy2ixNlA/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/EL3hKfLEoI-jlXgOthTnrA/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/_H-BzL1KwnWCB_PgXc7x1A/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/6g5ceSdZx1_H6XcpkkbExg/o.jpg',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				/* 10 */ {
					name: 'Woodhouse Fish Company',
					categoryId: 10, // Wine Bar
					address: '1914 Fillmore St, San Francisco, CA 94115',
					lat: 37.78752,
					lon: -122.43349,
					photoContent:
						'https://s3-media0.fl.yelpcdn.com/bphoto/H0luh0if0BlL2qSdtuHkqg/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/bfaVWB5OalovXIQzbiel8g/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/Z8D_LHGNIJXPjGHB0xriQQ/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/1rlSNvS52o-jP4yqLs5PJg/o.jpg',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				/* 11 */ {
					name: 'La Mar Cebichería Peruana',
					categoryId: 12, // Latin
					address: 'Pier 1 1/2 The Embarcadero, Ste 100, San Francisco, CA 94111',
					lat: 37.79536,
					lon: -122.39371,
					photoContent:
						'https://s3-media0.fl.yelpcdn.com/bphoto/U-dJZlzMN1BrzL0nteDaLg/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/Y22Z5wfS3o9qX3elfx10Ng/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/n6rlQzHNwBAXiUsdW292Ow/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/6nhDLr-4ly3IIPFdDwbO0g/o.jpg',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				/* 12 */ {
					name: "Brenda's French Soul Food",
					categoryId: 9, // French
					address: '652 Polk St, San Francisco, CA 94102',
					lat: 37.782909,
					lon: -122.418869,
					photoContent:
						'https://s3-media0.fl.yelpcdn.com/bphoto/sTjgTEXukJKTw2NACCZWnw/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/yt784rxV6ktmVSr6sVCa_Q/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/xAAAS0h50k3156R5aYt1Zw/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/XYj3qq-1arQb8MjEaf9nNQ/o.jpg',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				/* 13 */ {
					name: 'El Farolito',
					categoryId: 13, // Mexican
					address: '2779 Mission St, San Francisco, CA 94110',
					lat: 37.75272,
					lon: -122.41836,
					photoContent:
						'https://s3-media0.fl.yelpcdn.com/bphoto/gcC2Uwtu5raP13D3jWYm0Q/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/-FMhe6ONw5pHntoOM-0VhQ/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/oGoLT_OUwoxmGJW2RVa3Vw/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/CLSKes7rI5JLem2rtMCcIw/o.jpg',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				/* 14 */ {
					name: 'JIJIME',
					categoryId: 6, // Korean
					address: '5524 Geary Blvd, San Francisco, CA 94121',
					lat: 37.780560,
					lon: -122.478800,
					photoContent:
						'https://s3-media0.fl.yelpcdn.com/bphoto/ydxZ4gUWhJ0StTyQ-cZy1A/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/4pM3A3hP32KhFCGUMhAk9w/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/SKFg1_OUpKMConFAPVcsNg/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/cHyANtyng_-s1pdyUsck6Q/o.jpg',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				/* 15 */ {
					name: 'Baiano Pizzeria',
					categoryId: 1, // Pizza 
					address: '1330 9th Ave, San Francisco, CA 94122',
					lat: 37.763430,
					lon: -122.465940,
					photoContent:
						'https://s3-media0.fl.yelpcdn.com/bphoto/mw2FUmpIbaFXwlr4VO0LWg/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/ACmk84CziA8xdazFs7M0jg/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/TGlX9akeUVi9RDzyOmE6pA/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/c6fUUY6J9PBIlmozB6KKoQ/o.jpg',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				/* 16 */ {
					name: 'Izakaya Sozai',
					categoryId: 4, // Japanese
					address: '1500 Irving St, San Francisco, CA 94122',
					lat: 37.763850,
					lon: -122.474150,
					photoContent:
						'https://s3-media0.fl.yelpcdn.com/bphoto/kfMmiJreRS4QMwlUUrw2jA/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/4SItgA6WU47-rC-Y9aQxew/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/uG2r48qpU5uHH6BuAs2T-w/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/SpvCusczBqaF_5LdatXS-Q/o.jpg',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				/* 17 */ {
					name: 'Lou\'s Cafe',
					categoryId: 11, // Sandwiches 
					address: '5017 Geary Blvd, San Francisco, CA 94118',
					lat: 37.780602,
					lon: -122.473221,
					photoContent:
						'https://s3-media0.fl.yelpcdn.com/bphoto/tQ1piN3Zj38AAyRdGeyOog/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/gHkV3J69ZgEpfl4poKhp8w/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/1klm9f2Dc_6eWteNEUjl-g/o.jpg,https://s3-media0.fl.yelpcdn.com/bphoto/h098uwJlzxoUynYfdA5ACQ/o.jpg',
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Businesses', null, {});
	}
};
