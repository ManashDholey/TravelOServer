const { v4: uuid } = require('uuid');

const hotels = {
    "data": [
        {
            id: uuid(),
            name: "Whispering Pines Cottages",
            category: "National Parks",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/9da40e3c-5846-4359-bb41-05c27b09a8f5.jpeg?im_w=720",
            imageArr: ["https://a0.muscache.com/im/pictures/miso/Hosting-578733555164036351/original/fc0129d6-02df-4782-92e9-051a881c67a5.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-578733555164036351/original/694d278e-ff0d-4c08-b549-de3a07313be8.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-578733555164036351/original/c3222377-07de-4376-868d-d1b55b06390c.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-578733555164036351/original/8d2a7815-1e0e-4946-8457-8884f5842fff.jpeg?im_w=720"],
            address: "Jibhi",
            city: "Banjar Valley",
            state: "Himachal Pradesh",
            country: "India",
            price: 2999,
            rating: 3.7,
            numberOfBathrooms: 2,
            numberOfBeds: 2,
            numberOfguest: 6,
            numberOfBedrooms: 2,
            numberOfStudies: 0,
            hostName: "Daleep",
            hostJoinedOn: "March 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["Smoke alarm", "Carbon monoxide alarm"],
            houseRules: ["Check-in: 12:00 pm - 11:00 pm", "Check out: 11:00 am", "Pets are allowed"],
            propertyType: "Hotel",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sukoon Baag",
            category: "National Parks",
            image: "https://a0.muscache.com/im/pictures/90d0b224-16e2-41c1-9819-6002749a193e.jpg?im_w=720",
            imageArr: ["https://a0.muscache.com/im/pictures/miso/Hosting-53407714/original/f3cf4c09-5419-4f1c-b47c-01987c09b4df.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/c1947f8b-da1e-4800-badf-ed51be3e90da.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-53407714/original/db0a4d4b-f03a-4c36-a70b-d87bf32c41a7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/2430bf07-ec42-4b91-9e16-2f88939671fd.jpg?im_w=720"],
            address: "Bir",
            city: "Joginder Nagar Valley",
            state: "Himachal Pradesh",
            country: "India",
            price: 3020,
            rating: 3.8,
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Shashi",
            hostJoinedOn: "December 2019",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm"],
            houseRules: ["Check-in: After 1:00 pm", "Check out: 11:00 am", "Pets are allowed"],
            propertyType: "Guest House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sooty's Hideout",
            category: "National Parks",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-614375154474735110/original/7e7f4c4a-c496-4844-bd02-44e276b41718.jpeg?im_w=720",
            imageArr: ["https://a0.muscache.com/im/pictures/miso/Hosting-614375154474735110/original/1479b1a0-ee19-49a6-94e4-3c43049776c0.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-614375154474735110/original/cd0c1eba-74bd-4d6b-9ec3-20c6dd8b5226.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-614375154474735110/original/3ac04d3f-b4f5-4d01-8258-8083979c792e.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-614375154474735110/original/ac259f95-bc29-4466-89f9-12a97f2b0977.jpeg?im_w=720"],
            address: "Shangarh",
            city: "HP",
            state: "Himachal Pradesh",
            country: "India",
            price: 2750,
            rating: 4.5,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: false,
        },
        {
            id: uuid(),
            name: "StayVista @ Vista Divine",
            category: "National Parks",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-46781700/original/2b25b21b-87d4-48c9-b796-c2cd04af2788.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/miso/Hosting-46781700/original/76c122b8-e7ab-4933-a5ba-cfc86f949db5.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-46781700/original/1eaf860f-053d-46d9-9ee9-c7a603473ed0.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-46781700/original/57c1ca9f-8a11-4453-a15a-d6f0a257931c.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-46781700/original/eaf3779d-7978-4850-909b-c7a6ae6d15d8.jpeg?im_w=720"],
            address: "Rishikesh",
            city: "Rishikesh",
            state: "Uttarakhand",
            country: "India",
            price: 13541,
            rating: 4.69,
            numberOfBathrooms: 4,
            numberOfBeds: 3,
            numberOfguest: 0,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: " Ojas",
            hostJoinedOn: "May 2019",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "Hotel",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Stone Cottage",
            category: "National Parks",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-601816645157829673/original/e4792d54-354c-4187-854a-1d0552ecaa3e.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/miso/Hosting-601816645157829673/original/cec8d5b3-5c9c-4430-a4de-91e955a262aa.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-601816645157829673/original/0307b7d1-0588-4e54-ae51-c0f527a6c14f.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-601816645157829673/original/da17c3d7-7c27-4f13-9382-60d74a180e92.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-601816645157829673/original/209b06d4-d07b-4410-9f01-7b68580f5022.jpeg?im_w=720"],
            address: "Jibhi",
            city: "Banjar Valley",
            state: "Himachal Pradesh",
            country: "India",
            price: 2499,
            rating: 4.60,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "Guest House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "National Parks",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },

        // from here
        {
            id: uuid(),
            name: "Folktales ; a Boutique Homestay & Artist Retreat#",
            category: "National Parks",
            image: "https://a0.muscache.com/im/pictures/cfdf5973-9fc1-42d3-bde1-a072fdbe1825.jpg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/c7ecaa29-a2a6-4e50-8dd5-a4719096fb4b.jpg?im_w=720", "https://a0.muscache.com/im/pictures/d9f4455c-f29b-4068-81b8-c05957239930.jpg?im_w=720", "https://a0.muscache.com/im/pictures/eba3d6d8-8b5b-43a0-b1d4-05a4bb1c578b.jpg?im_w=720", "https://a0.muscache.com/im/pictures/941cc6e4-4178-489b-b92c-1df3af7a3464.jpg?im_w=720"],
            address: "Rakchham",
            city: "Rakchham",
            state: "Himachal Pradesh",
            country: "India",
            price: 1850,
            rating: 4.92,
            numberOfBathrooms: 3,
            numberOfBeds: 2,
            numberOfguest: 5,
            numberOfBedrooms: 2,
            numberOfStudies: 3,
            hostName: "Ishan",
            hostJoinedOn: "July 2015",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: 12:00 pm - 7:00 pm", "Check out: 10:00 am", "Self check-in with lockbox", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Free Birds, Charang",
            category: "National Parks",
            image: "https://a0.muscache.com/im/pictures/8a460633-914d-423d-92bb-d31e667043e6.jpg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/333214e0-6746-49aa-9082-2137f3c1e197.jpg?im_w=720", "https://a0.muscache.com/im/pictures/283a0eba-1adf-40ec-80b1-3f29a2a18fc1.jpg?im_w=720", "https://a0.muscache.com/im/pictures/4d8781bb-808a-47e1-a416-a7940399b860.jpg?im_w=720", "https://a0.muscache.com/im/pictures/870c97b3-3676-44ed-9c22-3df1c3e47dad.jpg?im_w=720"],
            address: "Charang Khas",
            city: "Charang Khas",
            state: "Himachal Pradesh",
            country: "India",
            price: 820,
            rating: 5.0,
            numberOfBathrooms: 2,
            numberOfBeds: 3,
            numberOfguest: 6,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sonu",
            hostJoinedOn: "March 2017",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Adobe 2 by The Mudhouse Marayoor",
            category: "National Parks",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-23795589/original/706ffee7-faaa-4d83-8ad3-e6541198750a.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/3f524723-b711-45e0-b75e-a1b66283da14.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-23795589/original/4bcf0213-c10e-4075-be14-0c0de7b885f4.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-23795589/original/0b49d6ee-913d-4b5f-9616-ab84b62f75d5.png?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-23795589/original/98aec13a-0a53-48e9-86a0-844ac55653a3.jpeg?im_w=720"],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 7200,
            rating: 4.82,
            numberOfBathrooms: 1,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 3,
            hostName: "Roopa",
            hostJoinedOn: "March 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: 12:00 pm - 5:00 pm", "No Pets", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Corona Safe: Avondale - Beautiful Heritage Home",
            category: "National Parks",
            image: "https://a0.muscache.com/im/pictures/7ef7f41b-62e2-43c1-b68f-8cd23e954167.jpg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/062b4382-2379-4858-a750-a13f8baac367.jpg?im_w=720", "https://a0.muscache.com/im/pictures/7fae41d2-161c-4713-a8f3-c951f0f3b479.jpg?im_w=720", "https://a0.muscache.com/im/pictures/e33cf17f-8324-482c-a2dc-13db163e28d8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/f2e679c9-f051-4e2b-830b-212be491e530.jpg?im_w=720"],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 11500,
            rating: 4.93,
            numberOfBathrooms: 4.5,
            numberOfBeds: 4,
            numberOfguest: 16,
            numberOfBedrooms: 4,
            numberOfStudies: 3,
            hostName: "Navin",
            hostJoinedOn: "June 2016",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: 2:00 pm - 5:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Camp Footprint - Wilderness Getaway",
            category: "National Parks",
            image: "https://a0.muscache.com/im/pictures/e1007553-4aff-4139-b913-21070752e414.jpg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/edd83c9f-2618-4639-918a-c689e264ef0b.jpg?im_w=720", "https://a0.muscache.com/im/pictures/637f9e3e-6270-4aa6-959b-ce4073d5aa0f.jpg?im_w=7200", "https://a0.muscache.com/im/pictures/3e38dc52-65ed-4fdf-99a0-ea32a5c153fb.jpg?im_w=720", "https://a0.muscache.com/im/pictures/1e741e0b-f88f-43b4-8839-3c0e201ad422.jpg?im_w=720"],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 24000,
            rating: 4.28,
            numberOfBathrooms: 3,
            numberOfBeds: 6,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Senthil",
            hostJoinedOn: "April 2019",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: 2:00 pm - 5:00 pm", "Not suitable for children and infants", "No Pets", "No smoking", "No parties or events", "Smoking is allowed"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Fernweh - Merakii Hospitality",
            category: "National Parks",
            image: "https://a0.muscache.com/im/pictures/11d290f5-5f07-4bd2-9f2c-88d48d1e7161.jpg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/a39b7f6c-a6d3-46a8-9424-fc4244e460c7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/ef4bd879-93c3-4500-b326-826756eb9579.jpg?im_w=720", "https://a0.muscache.com/im/pictures/44b0bb83-abfc-422f-be17-6dc949432236.jpg?im_w=720", "https://a0.muscache.com/im/pictures/a0df622c-325f-4c59-a2a1-b1ca861fdc4b.jpg?im_w=720"],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 7876,
            rating: 3.9,
            numberOfBathrooms: 5.5,
            numberOfBeds: 5,
            numberOfguest: 10,
            numberOfBedrooms: 5,
            numberOfStudies: 3,
            hostName: "Ajay",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "Smoking is allowed",],
            propertyType: "Guest House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Exclusive Top Floor 2 luxurious adjoining Rooms",
            category: "National Parks",
            image: "https://a0.muscache.com/im/pictures/07824a1a-09a9-4a1d-903c-bcd84b9a6b96.jpg?im_w=720",
            imageArr: ["https://a0.muscache.com/im/pictures/aad62348-0489-4b72-8942-a3d28168649f.jpg?im_w=720", "https://a0.muscache.com/im/pictures/ec96ad5c-5161-46aa-a37e-ee4ec253ff29.jpg?im_w=720", "https://a0.muscache.com/im/pictures/32b4d649-f409-4ce2-ac1a-bb1c4d41b0c7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/dcc0b105-ec4f-4c62-b52d-58c509c537ce.jpg?im_w=720"],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 5000,
            rating: 4.86,
            numberOfBathrooms: 2,
            numberOfBeds: 2,
            numberOfguest: 6,
            numberOfBedrooms: 2,
            numberOfStudies: 3,
            hostName: "Usha",
            hostJoinedOn: "August 2021",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "No Pets", "Smoking is allowed"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Taurus The Truck - Spiti Valley",
            category: "National Parks",
            image: "https://a0.muscache.com/im/pictures/0a233759-c896-420e-878e-dced5fcebeb8.jpg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/86868c0a-5a9f-4610-8405-4cc5378c4eb9.jpg?im_w=720", "https://a0.muscache.com/im/pictures/3314f870-662d-4287-a1ae-9dd4563b12b0.jpg?im_w=720", "https://a0.muscache.com/im/pictures/d6c0d0a2-2392-442d-8baf-89b7ef5666a4.jpg?im_w=720", "https://a0.muscache.com/im/pictures/6f4dd953-5577-470a-8b86-fa86327e317f.jpg?im_w=720"],
            address: "Kaza",
            city: "Kaza",
            state: "Himachal Pradesh",
            country: "India",
            price: 9900,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 10,
            numberOfguest: 10,
            numberOfBedrooms: 6,
            numberOfStudies: 3,
            hostName: "Captain Suresh",
            hostJoinedOn: "October 2017",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: 3:00 pm - 2:00 am", "Check out: 10:00 am", "Pets are allowed", "Smoking is allowed"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sweven by Merakii Hospitality",
            category: "National Parks",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-592276635181204848/original/84b1f461-2b66-4c2e-84cc-267e601d27e6.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/miso/Hosting-592276635181204848/original/84b1f461-2b66-4c2e-84cc-267e601d27e6.jpeg?im_w=1200", "https://a0.muscache.com/im/pictures/miso/Hosting-592276635181204848/original/876c2376-6b5f-41a6-9d74-68bb6899d906.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-717191697481134021/original/9ef64c02-d8f0-4edb-8bf9-a7334eb2e6b4.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-717191697481134021/original/15a1387e-8f49-49ee-b244-8f285b2a2ca7.jpeg?im_w=720"],
            address: "Nasogi",
            city: "Nasogi",
            state: "Himachal Pradesh",
            country: "India",
            price: 10611,
            rating: 4.86,
            numberOfBathrooms: 7,
            numberOfBeds: 7,
            numberOfguest: 14,
            numberOfBedrooms: 7,
            numberOfStudies: 3,
            hostName: "Ajay",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 12:00 pm", "Check out: 11:00 am", "Pets are allowed", "Smoking is allowed"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "StayVista at Maharaja Suite @ The Kang Estate",
            category: "National Parks",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-40075274/original/86a517b4-06a5-4073-a862-c294f5e83dc4.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/miso/Hosting-40075274/original/d10342cf-9f0e-43ca-8357-8a4c73e0f780.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-40075274/original/e2f19c2e-36b6-4c78-8a9d-7f0cc3bfff5e.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-40075274/original/e1c8b3ee-2bd3-4241-a897-e30ec1f2efac.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-40075274/original/dc004e7b-dec5-4f91-ac3e-5cf11bb310d7.jpeg?im_w=720"],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 16888,
            rating: 4.69,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Ankita",
            hostJoinedOn: "November 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "No pets", "No smoking"],
            propertyType: "Guest House",
            isCancelable: true,
        },

        {
            id: uuid(),
            name: "Munnar Retreat- Ideal for groups",
            category: "National Parks",
            image: "https://a0.muscache.com/im/pictures/b0a8bec1-6a89-449d-825f-87b15f8453d5.jpg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/4b675e29-a932-4f2d-8141-9bae74c553a1.jpg?im_w=720", "https://a0.muscache.com/im/pictures/e6b02036-b392-442c-aeab-da6a4f4492b8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/80df48ac-578d-4983-b8ab-e29085884360.jpg?im_w=720", "https://a0.muscache.com/im/pictures/e44c0e63-681b-4681-9bd1-e1f73e794b6a.jpg?im_w=720"],
            address: "Idukki",
            city: "Idukki",
            state: "Kerala",
            country: "India",
            price: 20000,
            rating: 4.99,
            numberOfBathrooms: 10,
            numberOfBeds: 10,
            numberOfguest: 16,
            numberOfBedrooms: 10,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "No pets"],
            propertyType: "Hotel",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "National Parks",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "National Parks",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "National Parks",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "National Parks",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "National Parks",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "National Parks",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "National Parks",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "National Parks",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "National Parks",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "National Parks",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "National Parks",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "National Parks",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "National Parks",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "National Parks",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "National Parks",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "National Parks",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "RiverTree Duplex- Riverside Plantation TreehouseAC",
            category: "Tiny Homes",
            image: "https://a0.muscache.com/im/pictures/c59d4481-f48a-43db-ade2-1df5689b725f.jpg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/51c9fc89-517c-42ed-a97b-002b5282c22a.jpg?im_w=720", "https://a0.muscache.com/im/pictures/f96ed3c3-6bbd-47f7-ac88-aa1bd9babb72.jpg?im_w=720", "https://a0.muscache.com/im/pictures/92b4a81e-416b-4c29-a1b0-4a9ce29ec223.jpg?im_w=720", "https://a0.muscache.com/im/pictures/e1dddd34-90fd-4394-a211-7ff96e00a57f.jpg?im_w=720"],
            address: "Kottathara",
            city: "Wayanad",
            state: "Kerala",
            country: "India",
            price: 2580,
            rating: 5.0,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "Hotel",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "RiverTree Duplex- Riverside Plantation TreehouseAC",
            category: "Tiny Homes",
            image: "https://a0.muscache.com/im/pictures/c59d4481-f48a-43db-ade2-1df5689b725f.jpg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/51c9fc89-517c-42ed-a97b-002b5282c22a.jpg?im_w=720", "https://a0.muscache.com/im/pictures/f96ed3c3-6bbd-47f7-ac88-aa1bd9babb72.jpg?im_w=720", "https://a0.muscache.com/im/pictures/92b4a81e-416b-4c29-a1b0-4a9ce29ec223.jpg?im_w=720", "https://a0.muscache.com/im/pictures/e1dddd34-90fd-4394-a211-7ff96e00a57f.jpg?im_w=720"],
            address: "Kottathara",
            city: "Wayanad",
            state: "Kerala",
            country: "India",
            price: 2580,
            rating: 5.0,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "Hotel",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "RiverTree Duplex- Riverside Plantation TreehouseAC",
            category: "Tiny Homes",
            image: "https://a0.muscache.com/im/pictures/c59d4481-f48a-43db-ade2-1df5689b725f.jpg?im_w=720",
            address: "Kottathara",
            city: "Wayanad",
            state: "Kerala",
            country: "India",
            price: 2580,
            rating: 2.9,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "Flat",
            isCancelable: false,
        },
        {
            id: uuid(),
            name: "The Oberoi Grand Kolkata",
            category: "Tropical",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/9da40e3c-5846-4359-bb41-05c27b09a8f5.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/9da40e3c-5846-4359-bb41-05c27b09a8f5.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/51c9fc89-517c-42ed-a97b-002b5282c22a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c59d4481-f48a-43db-ade2-1df5689b725f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/9da40e3c-5846-4359-bb41-05c27b09a8f5.jpeg?im_w=720"
            ],
            address: "15 Jawaharlal Nehru Road",
            city: "Kolkata",
            state: "West Bengal",
            country: "India",
            price: 7500,
            rating: 9.2,
            numberOfBathrooms: 1,
            numberOfBeds: 1,
            numberOfguest: 2,
            numberOfBedrooms: 1,
            numberOfStudies: 0,
            hostName: "The Oberoi Group",
            hostJoinedOn: "January 1934",
            amenities: ["Spa", "Fitness Center", "Swimming Pool", "Free Wi-Fi"],
            healthAndSafety: ["Smoke alarm", "Carbon monoxide alarm", "First aid kit"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 12:00 pm", "No pets", "No smoking", "No parties or events"],
            propertyType: "Hotel",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "ITC Sonar",
            category: "Tropical",
            image: "https://a0.muscache.com/im/pictures/51c9fc89-517c-42ed-a97b-002b5282c22a.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/51c9fc89-517c-42ed-a97b-002b5282c22a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/51c9fc89-517c-42ed-a97b-002b5282c22a.jpg?im_w=720",
               "https://a0.muscache.com/im/pictures/51c9fc89-517c-42ed-a97b-002b5282c22a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/51c9fc89-517c-42ed-a97b-002b5282c22a.jpg?im_w=720"
            ],
            address: "JBS Haldane Avenue",
            city: "Kolkata",
            state: "West Bengal",
            country: "India",
            price: 8000,
            rating: 8.4,
            numberOfBathrooms: 1,
            numberOfBeds: 1,
            numberOfguest: 2,
            numberOfBedrooms: 1,
            numberOfStudies: 0,
            hostName: "ITC Hotels",
            hostJoinedOn: "August 1975",
            amenities: ["Spa", "Outdoor Pool", "Multiple Dining Options", "Free Parking"],
            healthAndSafety: ["Smoke alarm", "Carbon monoxide alarm", "Security personnel"],
            houseRules: ["Check-in: After 3:00 pm", "Check out: 11:00 am", "No pets", "No smoking", "No parties or events"],
            propertyType: "Hotel",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "The Park Kolkata",
            category: "Tropical",
            image: "https://a0.muscache.com/im/pictures/51c9fc89-517c-42ed-a97b-002b5282c22a.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/51c9fc89-517c-42ed-a97b-002b5282c22a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/51c9fc89-517c-42ed-a97b-002b5282c22a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/51c9fc89-517c-42ed-a97b-002b5282c22a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/51c9fc89-517c-42ed-a97b-002b5282c22a.jpg?im_w=720"
            ],
            address: "17 Park Street",
            city: "Kolkata",
            state: "West Bengal",
            country: "India",
            price: 7600,
            rating: 7.5,
            numberOfBathrooms: 1,
            numberOfBeds: 1,
            numberOfguest: 2,
            numberOfBedrooms: 1,
            numberOfStudies: 0,
            hostName: "The Park Hotels",
            hostJoinedOn: "June 1967",
            amenities: ["Nightclub", "Spa", "Fitness Center", "Free Wi-Fi"],
            healthAndSafety: ["Smoke alarm", "Carbon monoxide alarm", "24-hour security"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 12:00 pm", "No pets", "No smoking", "No parties or events"],
            propertyType: "Hotel",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Whispering Pines Cottages",
            category: "Earth Homes",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/9da40e3c-5846-4359-bb41-05c27b09a8f5.jpeg?im_w=720",
            imageArr: ["https://a0.muscache.com/im/pictures/miso/Hosting-578733555164036351/original/fc0129d6-02df-4782-92e9-051a881c67a5.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-578733555164036351/original/694d278e-ff0d-4c08-b549-de3a07313be8.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-578733555164036351/original/c3222377-07de-4376-868d-d1b55b06390c.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-578733555164036351/original/8d2a7815-1e0e-4946-8457-8884f5842fff.jpeg?im_w=720"],
            address: "Jibhi",
            city: "Banjar Valley",
            state: "Himachal Pradesh",
            country: "India",
            price: 2999,
            rating: 3.7,
            numberOfBathrooms: 2,
            numberOfBeds: 2,
            numberOfguest: 6,
            numberOfBedrooms: 2,
            numberOfStudies: 0,
            hostName: "Daleep",
            hostJoinedOn: "March 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["Smoke alarm", "Carbon monoxide alarm"],
            houseRules: ["Check-in: 12:00 pm - 11:00 pm", "Check out: 11:00 am", "Pets are allowed"],
            propertyType: "Hotel",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sukoon Baag",
            category: "Earth Homes",
            image: "https://a0.muscache.com/im/pictures/90d0b224-16e2-41c1-9819-6002749a193e.jpg?im_w=720",
            imageArr: ["https://a0.muscache.com/im/pictures/miso/Hosting-53407714/original/f3cf4c09-5419-4f1c-b47c-01987c09b4df.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/c1947f8b-da1e-4800-badf-ed51be3e90da.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-53407714/original/db0a4d4b-f03a-4c36-a70b-d87bf32c41a7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/2430bf07-ec42-4b91-9e16-2f88939671fd.jpg?im_w=720"],
            address: "Bir",
            city: "Joginder Nagar Valley",
            state: "Himachal Pradesh",
            country: "India",
            price: 3020,
            rating: 3.8,
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Shashi",
            hostJoinedOn: "December 2019",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm"],
            houseRules: ["Check-in: After 1:00 pm", "Check out: 11:00 am", "Pets are allowed"],
            propertyType: "Guest House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sooty's Hideout",
            category: "Earth Homes",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-614375154474735110/original/7e7f4c4a-c496-4844-bd02-44e276b41718.jpeg?im_w=720",
            imageArr: ["https://a0.muscache.com/im/pictures/miso/Hosting-614375154474735110/original/1479b1a0-ee19-49a6-94e4-3c43049776c0.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-614375154474735110/original/cd0c1eba-74bd-4d6b-9ec3-20c6dd8b5226.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-614375154474735110/original/3ac04d3f-b4f5-4d01-8258-8083979c792e.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-614375154474735110/original/ac259f95-bc29-4466-89f9-12a97f2b0977.jpeg?im_w=720"],
            address: "Shangarh",
            city: "HP",
            state: "Himachal Pradesh",
            country: "India",
            price: 2750,
            rating: 4.5,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: false,
        },
        {
            id: uuid(),
            name: "StayVista @ Vista Divine",
            category: "Earth Homes",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-46781700/original/2b25b21b-87d4-48c9-b796-c2cd04af2788.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/miso/Hosting-46781700/original/76c122b8-e7ab-4933-a5ba-cfc86f949db5.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-46781700/original/1eaf860f-053d-46d9-9ee9-c7a603473ed0.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-46781700/original/57c1ca9f-8a11-4453-a15a-d6f0a257931c.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-46781700/original/eaf3779d-7978-4850-909b-c7a6ae6d15d8.jpeg?im_w=720"],
            address: "Rishikesh",
            city: "Rishikesh",
            state: "Uttarakhand",
            country: "India",
            price: 13541,
            rating: 4.69,
            numberOfBathrooms: 4,
            numberOfBeds: 3,
            numberOfguest: 0,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: " Ojas",
            hostJoinedOn: "May 2019",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "Hotel",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Stone Cottage",
            category: "Earth Homes",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-601816645157829673/original/e4792d54-354c-4187-854a-1d0552ecaa3e.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/miso/Hosting-601816645157829673/original/cec8d5b3-5c9c-4430-a4de-91e955a262aa.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-601816645157829673/original/0307b7d1-0588-4e54-ae51-c0f527a6c14f.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-601816645157829673/original/da17c3d7-7c27-4f13-9382-60d74a180e92.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-601816645157829673/original/209b06d4-d07b-4410-9f01-7b68580f5022.jpeg?im_w=720"],
            address: "Jibhi",
            city: "Banjar Valley",
            state: "Himachal Pradesh",
            country: "India",
            price: 2499,
            rating: 4.60,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "Guest House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "Earth Homes",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },

        // from here
        {
            id: uuid(),
            name: "Folktales ; a Boutique Homestay & Artist Retreat#",
            category: "Earth Homes",
            image: "https://a0.muscache.com/im/pictures/cfdf5973-9fc1-42d3-bde1-a072fdbe1825.jpg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/c7ecaa29-a2a6-4e50-8dd5-a4719096fb4b.jpg?im_w=720", "https://a0.muscache.com/im/pictures/d9f4455c-f29b-4068-81b8-c05957239930.jpg?im_w=720", "https://a0.muscache.com/im/pictures/eba3d6d8-8b5b-43a0-b1d4-05a4bb1c578b.jpg?im_w=720", "https://a0.muscache.com/im/pictures/941cc6e4-4178-489b-b92c-1df3af7a3464.jpg?im_w=720"],
            address: "Rakchham",
            city: "Rakchham",
            state: "Himachal Pradesh",
            country: "India",
            price: 1850,
            rating: 4.92,
            numberOfBathrooms: 3,
            numberOfBeds: 2,
            numberOfguest: 5,
            numberOfBedrooms: 2,
            numberOfStudies: 3,
            hostName: "Ishan",
            hostJoinedOn: "July 2015",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: 12:00 pm - 7:00 pm", "Check out: 10:00 am", "Self check-in with lockbox", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Free Birds, Charang",
            category: "Earth Homes",
            image: "https://a0.muscache.com/im/pictures/8a460633-914d-423d-92bb-d31e667043e6.jpg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/333214e0-6746-49aa-9082-2137f3c1e197.jpg?im_w=720", "https://a0.muscache.com/im/pictures/283a0eba-1adf-40ec-80b1-3f29a2a18fc1.jpg?im_w=720", "https://a0.muscache.com/im/pictures/4d8781bb-808a-47e1-a416-a7940399b860.jpg?im_w=720", "https://a0.muscache.com/im/pictures/870c97b3-3676-44ed-9c22-3df1c3e47dad.jpg?im_w=720"],
            address: "Charang Khas",
            city: "Charang Khas",
            state: "Himachal Pradesh",
            country: "India",
            price: 820,
            rating: 5.0,
            numberOfBathrooms: 2,
            numberOfBeds: 3,
            numberOfguest: 6,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sonu",
            hostJoinedOn: "March 2017",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Adobe 2 by The Mudhouse Marayoor",
            category: "Bed & Breakfast",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-23795589/original/706ffee7-faaa-4d83-8ad3-e6541198750a.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/3f524723-b711-45e0-b75e-a1b66283da14.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-23795589/original/4bcf0213-c10e-4075-be14-0c0de7b885f4.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-23795589/original/0b49d6ee-913d-4b5f-9616-ab84b62f75d5.png?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-23795589/original/98aec13a-0a53-48e9-86a0-844ac55653a3.jpeg?im_w=720"],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 7200,
            rating: 4.82,
            numberOfBathrooms: 1,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 3,
            hostName: "Roopa",
            hostJoinedOn: "March 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: 12:00 pm - 5:00 pm", "No Pets", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Corona Safe: Avondale - Beautiful Heritage Home",
            category: "Bed & Breakfast",
            image: "https://a0.muscache.com/im/pictures/7ef7f41b-62e2-43c1-b68f-8cd23e954167.jpg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/062b4382-2379-4858-a750-a13f8baac367.jpg?im_w=720", "https://a0.muscache.com/im/pictures/7fae41d2-161c-4713-a8f3-c951f0f3b479.jpg?im_w=720", "https://a0.muscache.com/im/pictures/e33cf17f-8324-482c-a2dc-13db163e28d8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/f2e679c9-f051-4e2b-830b-212be491e530.jpg?im_w=720"],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 11500,
            rating: 4.93,
            numberOfBathrooms: 4.5,
            numberOfBeds: 4,
            numberOfguest: 16,
            numberOfBedrooms: 4,
            numberOfStudies: 3,
            hostName: "Navin",
            hostJoinedOn: "June 2016",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: 2:00 pm - 5:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Camp Footprint - Wilderness Getaway",
            category: "Bed & Breakfast",
            image: "https://a0.muscache.com/im/pictures/e1007553-4aff-4139-b913-21070752e414.jpg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/edd83c9f-2618-4639-918a-c689e264ef0b.jpg?im_w=720", "https://a0.muscache.com/im/pictures/637f9e3e-6270-4aa6-959b-ce4073d5aa0f.jpg?im_w=7200", "https://a0.muscache.com/im/pictures/3e38dc52-65ed-4fdf-99a0-ea32a5c153fb.jpg?im_w=720", "https://a0.muscache.com/im/pictures/1e741e0b-f88f-43b4-8839-3c0e201ad422.jpg?im_w=720"],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 24000,
            rating: 4.28,
            numberOfBathrooms: 3,
            numberOfBeds: 6,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Senthil",
            hostJoinedOn: "April 2019",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: 2:00 pm - 5:00 pm", "Not suitable for children and infants", "No Pets", "No smoking", "No parties or events", "Smoking is allowed"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Fernweh - Merakii Hospitality",
            category: "Bed & Breakfast",
            image: "https://a0.muscache.com/im/pictures/11d290f5-5f07-4bd2-9f2c-88d48d1e7161.jpg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/a39b7f6c-a6d3-46a8-9424-fc4244e460c7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/ef4bd879-93c3-4500-b326-826756eb9579.jpg?im_w=720", "https://a0.muscache.com/im/pictures/44b0bb83-abfc-422f-be17-6dc949432236.jpg?im_w=720", "https://a0.muscache.com/im/pictures/a0df622c-325f-4c59-a2a1-b1ca861fdc4b.jpg?im_w=720"],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 7876,
            rating: 3.9,
            numberOfBathrooms: 5.5,
            numberOfBeds: 5,
            numberOfguest: 10,
            numberOfBedrooms: 5,
            numberOfStudies: 3,
            hostName: "Ajay",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "Smoking is allowed",],
            propertyType: "Guest House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Exclusive Top Floor 2 luxurious adjoining Rooms",
            category: "Bed & Breakfast",
            image: "https://a0.muscache.com/im/pictures/07824a1a-09a9-4a1d-903c-bcd84b9a6b96.jpg?im_w=720",
            imageArr: ["https://a0.muscache.com/im/pictures/aad62348-0489-4b72-8942-a3d28168649f.jpg?im_w=720", "https://a0.muscache.com/im/pictures/ec96ad5c-5161-46aa-a37e-ee4ec253ff29.jpg?im_w=720", "https://a0.muscache.com/im/pictures/32b4d649-f409-4ce2-ac1a-bb1c4d41b0c7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/dcc0b105-ec4f-4c62-b52d-58c509c537ce.jpg?im_w=720"],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 5000,
            rating: 4.86,
            numberOfBathrooms: 2,
            numberOfBeds: 2,
            numberOfguest: 6,
            numberOfBedrooms: 2,
            numberOfStudies: 3,
            hostName: "Usha",
            hostJoinedOn: "August 2021",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "No Pets", "Smoking is allowed"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Taurus The Truck - Spiti Valley",
            category: "Bed & Breakfast",
            image: "https://a0.muscache.com/im/pictures/0a233759-c896-420e-878e-dced5fcebeb8.jpg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/86868c0a-5a9f-4610-8405-4cc5378c4eb9.jpg?im_w=720", "https://a0.muscache.com/im/pictures/3314f870-662d-4287-a1ae-9dd4563b12b0.jpg?im_w=720", "https://a0.muscache.com/im/pictures/d6c0d0a2-2392-442d-8baf-89b7ef5666a4.jpg?im_w=720", "https://a0.muscache.com/im/pictures/6f4dd953-5577-470a-8b86-fa86327e317f.jpg?im_w=720"],
            address: "Kaza",
            city: "Kaza",
            state: "Himachal Pradesh",
            country: "India",
            price: 9900,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 10,
            numberOfguest: 10,
            numberOfBedrooms: 6,
            numberOfStudies: 3,
            hostName: "Captain Suresh",
            hostJoinedOn: "October 2017",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: 3:00 pm - 2:00 am", "Check out: 10:00 am", "Pets are allowed", "Smoking is allowed"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sweven by Merakii Hospitality",
            category: "Bed & Breakfast",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-592276635181204848/original/84b1f461-2b66-4c2e-84cc-267e601d27e6.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/miso/Hosting-592276635181204848/original/84b1f461-2b66-4c2e-84cc-267e601d27e6.jpeg?im_w=1200", "https://a0.muscache.com/im/pictures/miso/Hosting-592276635181204848/original/876c2376-6b5f-41a6-9d74-68bb6899d906.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-717191697481134021/original/9ef64c02-d8f0-4edb-8bf9-a7334eb2e6b4.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-717191697481134021/original/15a1387e-8f49-49ee-b244-8f285b2a2ca7.jpeg?im_w=720"],
            address: "Nasogi",
            city: "Nasogi",
            state: "Himachal Pradesh",
            country: "India",
            price: 10611,
            rating: 4.86,
            numberOfBathrooms: 7,
            numberOfBeds: 7,
            numberOfguest: 14,
            numberOfBedrooms: 7,
            numberOfStudies: 3,
            hostName: "Ajay",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 12:00 pm", "Check out: 11:00 am", "Pets are allowed", "Smoking is allowed"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "StayVista at Maharaja Suite @ The Kang Estate",
            category: "Bed & Breakfast",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-40075274/original/86a517b4-06a5-4073-a862-c294f5e83dc4.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/miso/Hosting-40075274/original/d10342cf-9f0e-43ca-8357-8a4c73e0f780.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-40075274/original/e2f19c2e-36b6-4c78-8a9d-7f0cc3bfff5e.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-40075274/original/e1c8b3ee-2bd3-4241-a897-e30ec1f2efac.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-40075274/original/dc004e7b-dec5-4f91-ac3e-5cf11bb310d7.jpeg?im_w=720"],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 16888,
            rating: 4.69,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Ankita",
            hostJoinedOn: "November 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "No pets", "No smoking"],
            propertyType: "Guest House",
            isCancelable: true,
        },

        {
            id: uuid(),
            name: "Munnar Retreat- Ideal for groups",
            category: "Cabins",
            image: "https://a0.muscache.com/im/pictures/b0a8bec1-6a89-449d-825f-87b15f8453d5.jpg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/4b675e29-a932-4f2d-8141-9bae74c553a1.jpg?im_w=720", "https://a0.muscache.com/im/pictures/e6b02036-b392-442c-aeab-da6a4f4492b8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/80df48ac-578d-4983-b8ab-e29085884360.jpg?im_w=720", "https://a0.muscache.com/im/pictures/e44c0e63-681b-4681-9bd1-e1f73e794b6a.jpg?im_w=720"],
            address: "Idukki",
            city: "Idukki",
            state: "Kerala",
            country: "India",
            price: 20000,
            rating: 4.99,
            numberOfBathrooms: 10,
            numberOfBeds: 10,
            numberOfguest: 16,
            numberOfBedrooms: 10,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "No pets"],
            propertyType: "Hotel",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "Cabins",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "Cabins",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "Cabins",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "Cabins",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "Cabins",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "Cabins",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "Cabins",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "Farms",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "Farms",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "Farms",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "Farms",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "Farms",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "Farms",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "Castle",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "Castle",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "Sun View Mountain",
            category: "Castle",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/1dd8a1db-f7ce-44d5-b573-57984d621864.jpeg?im_w=720"],
            address: "Kasol",
            city: "kasol",
            state: "Himachal Pradesh",
            country: "India",
            price: 925,
            rating: 4.86,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "House",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "RiverTree Duplex- Riverside Plantation TreehouseAC",
            category: "Castle",
            image: "https://a0.muscache.com/im/pictures/c59d4481-f48a-43db-ade2-1df5689b725f.jpg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/51c9fc89-517c-42ed-a97b-002b5282c22a.jpg?im_w=720", "https://a0.muscache.com/im/pictures/f96ed3c3-6bbd-47f7-ac88-aa1bd9babb72.jpg?im_w=720", "https://a0.muscache.com/im/pictures/92b4a81e-416b-4c29-a1b0-4a9ce29ec223.jpg?im_w=720", "https://a0.muscache.com/im/pictures/e1dddd34-90fd-4394-a211-7ff96e00a57f.jpg?im_w=720"],
            address: "Kottathara",
            city: "Wayanad",
            state: "Kerala",
            country: "India",
            price: 2580,
            rating: 5.0,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "Hotel",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "RiverTree Duplex- Riverside Plantation TreehouseAC",
            category: "Castle",
            image: "https://a0.muscache.com/im/pictures/c59d4481-f48a-43db-ade2-1df5689b725f.jpg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/51c9fc89-517c-42ed-a97b-002b5282c22a.jpg?im_w=720", "https://a0.muscache.com/im/pictures/f96ed3c3-6bbd-47f7-ac88-aa1bd9babb72.jpg?im_w=720", "https://a0.muscache.com/im/pictures/92b4a81e-416b-4c29-a1b0-4a9ce29ec223.jpg?im_w=720", "https://a0.muscache.com/im/pictures/e1dddd34-90fd-4394-a211-7ff96e00a57f.jpg?im_w=720"],
            address: "Kottathara",
            city: "Wayanad",
            state: "Kerala",
            country: "India",
            price: 2580,
            rating: 5.0,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "Hotel",
            isCancelable: true,
        },
        {
            id: uuid(),
            name: "RiverTree Duplex- Riverside Plantation TreehouseAC",
            category: "Caves",
            image: "https://a0.muscache.com/im/pictures/c59d4481-f48a-43db-ade2-1df5689b725f.jpg?im_w=720",
            address: "Kottathara",
            city: "Wayanad",
            state: "Kerala",
            country: "India",
            price: 2580,
            rating: 2.9,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "Flat",
            isCancelable: false,
        },
        {
            id: uuid(),
            name: "The Oberoi Grand Kolkata",
            category: "Caves",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/9da40e3c-5846-4359-bb41-05c27b09a8f5.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/9da40e3c-5846-4359-bb41-05c27b09a8f5.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/51c9fc89-517c-42ed-a97b-002b5282c22a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c59d4481-f48a-43db-ade2-1df5689b725f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/9da40e3c-5846-4359-bb41-05c27b09a8f5.jpeg?im_w=720"
            ],
            address: "15 Jawaharlal Nehru Road",
            city: "Kolkata",
            state: "West Bengal",
            country: "India",
            price: 7500,
            rating: 9.2,
            numberOfBathrooms: 1,
            numberOfBeds: 1,
            numberOfguest: 2,
            numberOfBedrooms: 1,
            numberOfStudies: 0,
            hostName: "The Oberoi Group",
            hostJoinedOn: "January 1934",
            amenities: ["Spa", "Fitness Center", "Swimming Pool", "Free Wi-Fi"],
            healthAndSafety: ["Smoke alarm", "Carbon monoxide alarm", "First aid kit"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 12:00 pm", "No pets", "No smoking", "No parties or events"],
            propertyType: "Hotel",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "ITC Sonar",
            category: "Caves",
            image: "https://a0.muscache.com/im/pictures/51c9fc89-517c-42ed-a97b-002b5282c22a.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/51c9fc89-517c-42ed-a97b-002b5282c22a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/51c9fc89-517c-42ed-a97b-002b5282c22a.jpg?im_w=720",
               "https://a0.muscache.com/im/pictures/51c9fc89-517c-42ed-a97b-002b5282c22a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/51c9fc89-517c-42ed-a97b-002b5282c22a.jpg?im_w=720"
            ],
            address: "JBS Haldane Avenue",
            city: "Kolkata",
            state: "West Bengal",
            country: "India",
            price: 8000,
            rating: 8.4,
            numberOfBathrooms: 1,
            numberOfBeds: 1,
            numberOfguest: 2,
            numberOfBedrooms: 1,
            numberOfStudies: 0,
            hostName: "ITC Hotels",
            hostJoinedOn: "August 1975",
            amenities: ["Spa", "Outdoor Pool", "Multiple Dining Options", "Free Parking"],
            healthAndSafety: ["Smoke alarm", "Carbon monoxide alarm", "Security personnel"],
            houseRules: ["Check-in: After 3:00 pm", "Check out: 11:00 am", "No pets", "No smoking", "No parties or events"],
            propertyType: "Hotel",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "The Park Kolkata",
            category: "Caves",
            image: "https://a0.muscache.com/im/pictures/51c9fc89-517c-42ed-a97b-002b5282c22a.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/51c9fc89-517c-42ed-a97b-002b5282c22a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/51c9fc89-517c-42ed-a97b-002b5282c22a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/51c9fc89-517c-42ed-a97b-002b5282c22a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/51c9fc89-517c-42ed-a97b-002b5282c22a.jpg?im_w=720"
            ],
            address: "17 Park Street",
            city: "Kolkata",
            state: "West Bengal",
            country: "India",
            price: 7600,
            rating: 7.5,
            numberOfBathrooms: 1,
            numberOfBeds: 1,
            numberOfguest: 2,
            numberOfBedrooms: 1,
            numberOfStudies: 0,
            hostName: "The Park Hotels",
            hostJoinedOn: "June 1967",
            amenities: ["Nightclub", "Spa", "Fitness Center", "Free Wi-Fi"],
            healthAndSafety: ["Smoke alarm", "Carbon monoxide alarm", "24-hour security"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 12:00 pm", "No pets", "No smoking", "No parties or events"],
            propertyType: "Hotel",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Hotel 715",
            category: "Luxe",
            image: "https://source.unsplash.com/400x300/?hotel,room,37",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,39",
                "https://source.unsplash.com/400x300/?hotel,41",
                "https://source.unsplash.com/400x300/?hotel,64",
                "https://source.unsplash.com/400x300/?hotel,87"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 18104,
            rating: 3.83,
            numberOfBathrooms: 1,
            numberOfBeds: 2,
            numberOfguest: 4,
            numberOfBedrooms: 3,
            numberOfStudies: 2,
            hostName: "Host 33",
            hostJoinedOn: "Nov 2023",
            ameneties: [
                "Wifi",
                "Swimming Pool",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
            propertyType: "Cottage",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Hotel 357",
            category: "Countryside",
            image: "https://source.unsplash.com/400x300/?hotel,room,76",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,20",
                "https://source.unsplash.com/400x300/?hotel,42",
                "https://source.unsplash.com/400x300/?hotel,25",
                "https://source.unsplash.com/400x300/?hotel,22"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 17597,
            rating: 3.5,
            numberOfBathrooms: 4,
            numberOfBeds: 3,
            numberOfguest: 7,
            numberOfBedrooms: 2,
            numberOfStudies: 2,
            hostName: "Host 3",
            hostJoinedOn: "Aug 2018",
            ameneties: [
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
            houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
            propertyType: "Villa",
            isCancelable: false
        },
        {
            id: uuid(),
            name: "Hotel 577",
            category: "Farms",
            image: "https://source.unsplash.com/400x300/?hotel,room,71",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,33",
                "https://source.unsplash.com/400x300/?hotel,100",
                "https://source.unsplash.com/400x300/?hotel,24",
                "https://source.unsplash.com/400x300/?hotel,44"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 14298,
            rating: 3.95,
            numberOfBathrooms: 5,
            numberOfBeds: 1,
            numberOfguest: 7,
            numberOfBedrooms: 2,
            numberOfStudies: 1,
            hostName: "Host 41",
            hostJoinedOn: "Apr 2015",
            ameneties: [
                "Wifi",
                "Swimming Pool",
                "Parking"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
            propertyType: "Villa",
            isCancelable: false
        },
        {
            id: uuid(),
            name: "Hotel 430",
            category: "Earth Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,67",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,36",
                "https://source.unsplash.com/400x300/?hotel,65",
                "https://source.unsplash.com/400x300/?hotel,13",
                "https://source.unsplash.com/400x300/?hotel,44"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 2672,
            rating: 4.29,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 5,
            numberOfBedrooms: 4,
            numberOfStudies: 1,
            hostName: "Host 43",
            hostJoinedOn: "Apr 2021",
            ameneties: [
                "Parking",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm"
            ],
            houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
            propertyType: "Resort",
            isCancelable: false
        },
        {
            id: uuid(),
            name: "Hotel 419",
            category: "Tiny Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,54",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,25",
                "https://source.unsplash.com/400x300/?hotel,90",
                "https://source.unsplash.com/400x300/?hotel,63",
                "https://source.unsplash.com/400x300/?hotel,18"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 6815,
            rating: 3.71,
            numberOfBathrooms: 3,
            numberOfBeds: 1,
            numberOfguest: 7,
            numberOfBedrooms: 3,
            numberOfStudies: 0,
            hostName: "Host 3",
            hostJoinedOn: "Feb 2017",
            ameneties: [
                "Parking",
                "Swimming Pool",
                "Kitchen",
                "Wifi"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
            houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
            propertyType: "Cottage",
            isCancelable: false
        },
        {
            id: uuid(),
            name: "Hotel 663",
            category: "Tiny Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,35",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,69",
                "https://source.unsplash.com/400x300/?hotel,31",
                "https://source.unsplash.com/400x300/?hotel,50",
                "https://source.unsplash.com/400x300/?hotel,49"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 19642,
            rating: 4.5,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 7,
            numberOfBedrooms: 2,
            numberOfStudies: 2,
            hostName: "Host 45",
            hostJoinedOn: "Dec 2019",
            ameneties: [
                "Kitchen",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
            houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
            propertyType: "Cottage",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Hotel 215",
            category: "A-frames",
            image: "https://source.unsplash.com/400x300/?hotel,room,73",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,47",
                "https://source.unsplash.com/400x300/?hotel,75",
                "https://source.unsplash.com/400x300/?hotel,83",
                "https://source.unsplash.com/400x300/?hotel,56"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 4273,
            rating: 4.43,
            numberOfBathrooms: 4,
            numberOfBeds: 1,
            numberOfguest: 7,
            numberOfBedrooms: 3,
            numberOfStudies: 0,
            hostName: "Host 49",
            hostJoinedOn: "Aug 2019",
            ameneties: [
                "Wifi",
                "Parking",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm",
                "Nearby water body"
            ],
            houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
            propertyType: "Villa",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Hotel 993",
            category: "Surfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,32",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,68",
                "https://source.unsplash.com/400x300/?hotel,23",
                "https://source.unsplash.com/400x300/?hotel,17",
                "https://source.unsplash.com/400x300/?hotel,25"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 19206,
            rating: 3.7,
            numberOfBathrooms: 2,
            numberOfBeds: 3,
            numberOfguest: 4,
            numberOfBedrooms: 4,
            numberOfStudies: 0,
            hostName: "Host 19",
            hostJoinedOn: "May 2018",
            ameneties: [
                "Wifi",
                "Air Conditioning",
                "Parking"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
            houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
            propertyType: "Villa",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Hotel 275",
            category: "Countryside",
            image: "https://source.unsplash.com/400x300/?hotel,room,90",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,59",
                "https://source.unsplash.com/400x300/?hotel,86",
                "https://source.unsplash.com/400x300/?hotel,75",
                "https://source.unsplash.com/400x300/?hotel,35"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 15079,
            rating: 3.77,
            numberOfBathrooms: 1,
            numberOfBeds: 2,
            numberOfguest: 4,
            numberOfBedrooms: 1,
            numberOfStudies: 2,
            hostName: "Host 50",
            hostJoinedOn: "Jun 2017",
            ameneties: [
                "Air Conditioning",
                "Wifi",
                "Swimming Pool",
                "Parking"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
            propertyType: "Cottage",
            isCancelable: true
        },
        {
            id: "9fdc6e6a-95ae-4b87-800a-48304fcaf8ec",
            name: "Hotel 715",
            category: "Luxe",
            image: "https://source.unsplash.com/400x300/?hotel,room,37",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,39",
                "https://source.unsplash.com/400x300/?hotel,41",
                "https://source.unsplash.com/400x300/?hotel,64",
                "https://source.unsplash.com/400x300/?hotel,87"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 18104,
            rating: 3.83,
            numberOfBathrooms: 1,
            numberOfBeds: 2,
            numberOfguest: 4,
             numberOfBedrooms: 3,
             numberOfStudies: 2,
             hostName: "Host 33",
             hostJoinedOn: "Nov 2023",
             ameneties: [
                "Wifi",
                "Swimming Pool",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "71fdc9cb-d536-4d39-b1e9-2ac99ae6964c",
            name: "Hotel 357",
            category: "Countryside",
            image: "https://source.unsplash.com/400x300/?hotel,room,76",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,20",
                "https://source.unsplash.com/400x300/?hotel,42",
                "https://source.unsplash.com/400x300/?hotel,25",
                "https://source.unsplash.com/400x300/?hotel,22"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 17597,
            rating: 3.5,
            numberOfBathrooms: 4,
            numberOfBeds: 3,
            numberOfguest: 7,
             numberOfBedrooms: 2,
             numberOfStudies: 2,
             hostName: "Host 3",
             hostJoinedOn: "Aug 2018",
             ameneties: [
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "4b96c503-3e9c-413b-8616-d892b1866595",
            name: "Hotel 577",
            category: "Farms",
            image: "https://source.unsplash.com/400x300/?hotel,room,71",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,33",
                "https://source.unsplash.com/400x300/?hotel,100",
                "https://source.unsplash.com/400x300/?hotel,24",
                "https://source.unsplash.com/400x300/?hotel,44"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 14298,
            rating: 3.95,
            numberOfBathrooms: 5,
            numberOfBeds: 1,
            numberOfguest: 7,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 41",
             hostJoinedOn: "Apr 2015",
             ameneties: [
                "Wifi",
                "Swimming Pool",
                "Parking"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "2b0276f4-6bf7-4de6-b663-ebbef9db9ca4",
            name: "Hotel 430",
            category: "Earth Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,67",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,36",
                "https://source.unsplash.com/400x300/?hotel,65",
                "https://source.unsplash.com/400x300/?hotel,13",
                "https://source.unsplash.com/400x300/?hotel,44"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 2672,
            rating: 4.29,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 5,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 43",
             hostJoinedOn: "Apr 2021",
             ameneties: [
                "Parking",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "f6d8f74d-e0f4-4182-bf0e-8a8454a61c81",
            name: "Hotel 419",
            category: "Tiny Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,54",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,25",
                "https://source.unsplash.com/400x300/?hotel,90",
                "https://source.unsplash.com/400x300/?hotel,63",
                "https://source.unsplash.com/400x300/?hotel,18"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 6815,
            rating: 3.71,
            numberOfBathrooms: 3,
            numberOfBeds: 1,
            numberOfguest: 7,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 3",
             hostJoinedOn: "Feb 2017",
             ameneties: [
                "Parking",
                "Swimming Pool",
                "Kitchen",
                "Wifi"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "29bab822-3454-42f6-9f32-0394ab9bd5f5",
            name: "Hotel 663",
            category: "Tiny Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,35",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,69",
                "https://source.unsplash.com/400x300/?hotel,31",
                "https://source.unsplash.com/400x300/?hotel,50",
                "https://source.unsplash.com/400x300/?hotel,49"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 19642,
            rating: 4.5,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 7,
             numberOfBedrooms: 2,
             numberOfStudies: 2,
             hostName: "Host 45",
             hostJoinedOn: "Dec 2019",
             ameneties: [
                "Kitchen",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "7145a05e-136e-4d35-8e69-1ca45bb588e6",
            name: "Hotel 215",
            category: "A-frames",
            image: "https://source.unsplash.com/400x300/?hotel,room,73",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,47",
                "https://source.unsplash.com/400x300/?hotel,75",
                "https://source.unsplash.com/400x300/?hotel,83",
                "https://source.unsplash.com/400x300/?hotel,56"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 4273,
            rating: 4.43,
            numberOfBathrooms: 4,
            numberOfBeds: 1,
            numberOfguest: 7,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 49",
             hostJoinedOn: "Aug 2019",
             ameneties: [
                "Wifi",
                "Parking",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "491fc4ef-524b-480a-b7d7-99c38e3a0f24",
            name: "Hotel 993",
            category: "Surfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,32",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,68",
                "https://source.unsplash.com/400x300/?hotel,23",
                "https://source.unsplash.com/400x300/?hotel,17",
                "https://source.unsplash.com/400x300/?hotel,25"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 19206,
            rating: 3.7,
            numberOfBathrooms: 2,
            numberOfBeds: 3,
            numberOfguest: 4,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 19",
             hostJoinedOn: "May 2018",
             ameneties: [
                "Wifi",
                "Air Conditioning",
                "Parking"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "ff9a153c-7927-49f6-908a-49f950595ce5",
            name: "Hotel 275",
            category: "Countryside",
            image: "https://source.unsplash.com/400x300/?hotel,room,90",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,59",
                "https://source.unsplash.com/400x300/?hotel,86",
                "https://source.unsplash.com/400x300/?hotel,75",
                "https://source.unsplash.com/400x300/?hotel,35"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 15079,
            rating: 3.77,
            numberOfBathrooms: 1,
            numberOfBeds: 2,
            numberOfguest: 4,
             numberOfBedrooms: 1,
             numberOfStudies: 2,
             hostName: "Host 50",
             hostJoinedOn: "Jun 2017",
             ameneties: [
                "Air Conditioning",
                "Wifi",
                "Swimming Pool",
                "Parking"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "1b33723b-0129-479d-a3a4-67975c909bf0",
            name: "Hotel 362",
            category: "Island",
            image: "https://source.unsplash.com/400x300/?hotel,room,81",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,21",
                "https://source.unsplash.com/400x300/?hotel,31",
                "https://source.unsplash.com/400x300/?hotel,52",
                "https://source.unsplash.com/400x300/?hotel,45"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 8964,
            rating: 4.08,
            numberOfBathrooms: 5,
            numberOfBeds: 3,
            numberOfguest: 1,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 2",
             hostJoinedOn: "Jul 2017",
             ameneties: [
                "Wifi",
                "Pets Allowed",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "b3e51c66-5fc2-47d6-82c5-a5524facc0ac",
            name: "Hotel 608",
            category: "Island",
            image: "https://source.unsplash.com/400x300/?hotel,room,67",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,30",
                "https://source.unsplash.com/400x300/?hotel,22",
                "https://source.unsplash.com/400x300/?hotel,70",
                "https://source.unsplash.com/400x300/?hotel,8"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 17190,
            rating: 3.63,
            numberOfBathrooms: 5,
            numberOfBeds: 2,
            numberOfguest: 3,
             numberOfBedrooms: 2,
             numberOfStudies: 2,
             hostName: "Host 37",
             hostJoinedOn: "Apr 2021",
             ameneties: [
                "Swimming Pool",
                "Parking",
                "Kitchen",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "e04e69cb-faee-4d67-817f-6d2ec95e73c1",
            name: "Hotel 937",
            category: "Historical Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,98",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,76",
                "https://source.unsplash.com/400x300/?hotel,36",
                "https://source.unsplash.com/400x300/?hotel,63",
                "https://source.unsplash.com/400x300/?hotel,4"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 9266,
            rating: 3.8,
            numberOfBathrooms: 4,
            numberOfBeds: 2,
            numberOfguest: 8,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 41",
             hostJoinedOn: "Dec 2019",
             ameneties: [
                "Air Conditioning",
                "Kitchen"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "f6772099-9bc4-4707-b6b3-c955e2b05ec9",
            name: "Hotel 284",
            category: "Campervans",
            image: "https://source.unsplash.com/400x300/?hotel,room,66",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,100",
                "https://source.unsplash.com/400x300/?hotel,14",
                "https://source.unsplash.com/400x300/?hotel,63",
                "https://source.unsplash.com/400x300/?hotel,61"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 5970,
            rating: 3.78,
            numberOfBathrooms: 4,
            numberOfBeds: 1,
            numberOfguest: 8,
             numberOfBedrooms: 3,
             numberOfStudies: 1,
             hostName: "Host 24",
             hostJoinedOn: "Jun 2017",
             ameneties: [
                "Air Conditioning",
                "Swimming Pool",
                "Wifi",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "61121476-d2c5-4433-8c74-8b43952d1044",
            name: "Hotel 535",
            category: "Design",
            image: "https://source.unsplash.com/400x300/?hotel,room,36",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,37",
                "https://source.unsplash.com/400x300/?hotel,52",
                "https://source.unsplash.com/400x300/?hotel,67",
                "https://source.unsplash.com/400x300/?hotel,85"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 11307,
            rating: 4.91,
            numberOfBathrooms: 4,
            numberOfBeds: 2,
            numberOfguest: 8,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 23",
             hostJoinedOn: "May 2016",
             ameneties: [
                "Swimming Pool",
                "Wifi",
                "Kitchen"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "4b96e6d5-dcf4-41c2-a6ba-d788a66222e3",
            name: "Hotel 286",
            category: "Lakefront",
            image: "https://source.unsplash.com/400x300/?hotel,room,56",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,100",
                "https://source.unsplash.com/400x300/?hotel,38",
                "https://source.unsplash.com/400x300/?hotel,30",
                "https://source.unsplash.com/400x300/?hotel,83"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 6627,
            rating: 4.59,
            numberOfBathrooms: 4,
            numberOfBeds: 2,
            numberOfguest: 4,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 29",
             hostJoinedOn: "Mar 2016",
             ameneties: [
                "Air Conditioning",
                "Parking",
                "Kitchen",
                "Swimming Pool",
                "Wifi"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "83b24559-ba0e-4834-a7e4-17bcb1f16fce",
            name: "Hotel 872",
            category: "Lakefront",
            image: "https://source.unsplash.com/400x300/?hotel,room,29",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,89",
                "https://source.unsplash.com/400x300/?hotel,87",
                "https://source.unsplash.com/400x300/?hotel,74",
                "https://source.unsplash.com/400x300/?hotel,38"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 7175,
            rating: 3.73,
            numberOfBathrooms: 1,
            numberOfBeds: 2,
            numberOfguest: 2,
             numberOfBedrooms: 4,
             numberOfStudies: 2,
             hostName: "Host 39",
             hostJoinedOn: "Jul 2015",
             ameneties: [
                "Pets Allowed",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "3deb2ef9-ac7e-4520-a8a5-d5850d449da7",
            name: "Hotel 956",
            category: "Caves",
            image: "https://source.unsplash.com/400x300/?hotel,room,63",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,65",
                "https://source.unsplash.com/400x300/?hotel,57",
                "https://source.unsplash.com/400x300/?hotel,65",
                "https://source.unsplash.com/400x300/?hotel,39"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 13736,
            rating: 4.47,
            numberOfBathrooms: 2,
            numberOfBeds: 4,
            numberOfguest: 5,
             numberOfBedrooms: 2,
             numberOfStudies: 0,
             hostName: "Host 41",
             hostJoinedOn: "Aug 2022",
             ameneties: [
                "Kitchen",
                "Parking"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "f4566de4-66be-4751-90a8-f19a406c1ee0",
            name: "Hotel 914",
            category: "Amazing Views",
            image: "https://source.unsplash.com/400x300/?hotel,room,91",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,1",
                "https://source.unsplash.com/400x300/?hotel,36",
                "https://source.unsplash.com/400x300/?hotel,69",
                "https://source.unsplash.com/400x300/?hotel,64"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 15721,
            rating: 3.97,
            numberOfBathrooms: 4,
            numberOfBeds: 2,
            numberOfguest: 2,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 23",
             hostJoinedOn: "May 2020",
             ameneties: [
                "Swimming Pool",
                "Wifi",
                "Parking",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "64649c55-9c7c-429b-87a1-6079e8de30c7",
            name: "Hotel 665",
            category: "Golfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,61",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,61",
                "https://source.unsplash.com/400x300/?hotel,79",
                "https://source.unsplash.com/400x300/?hotel,62",
                "https://source.unsplash.com/400x300/?hotel,10"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 14008,
            rating: 4.58,
            numberOfBathrooms: 3,
            numberOfBeds: 2,
            numberOfguest: 5,
             numberOfBedrooms: 2,
             numberOfStudies: 0,
             hostName: "Host 33",
             hostJoinedOn: "Feb 2022",
             ameneties: [
                "Kitchen",
                "Swimming Pool",
                "Wifi",
                "Pets Allowed",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "07baf815-ed9b-4178-a429-92b28ef2bbb9",
            name: "Hotel 162",
            category: "Tiny Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,19",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,52",
                "https://source.unsplash.com/400x300/?hotel,25",
                "https://source.unsplash.com/400x300/?hotel,61",
                "https://source.unsplash.com/400x300/?hotel,40"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 18274,
            rating: 4.23,
            numberOfBathrooms: 2,
            numberOfBeds: 2,
            numberOfguest: 8,
             numberOfBedrooms: 3,
             numberOfStudies: 2,
             hostName: "Host 3",
             hostJoinedOn: "May 2021",
             ameneties: [
                "Parking",
                "Swimming Pool",
                "Kitchen",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "c5adf942-0c76-40f1-a4da-5797a39d7d08",
            name: "Hotel 624",
            category: "Luxe",
            image: "https://source.unsplash.com/400x300/?hotel,room,79",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,38",
                "https://source.unsplash.com/400x300/?hotel,59",
                "https://source.unsplash.com/400x300/?hotel,38",
                "https://source.unsplash.com/400x300/?hotel,90"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 15421,
            rating: 4.29,
            numberOfBathrooms: 5,
            numberOfBeds: 1,
            numberOfguest: 4,
             numberOfBedrooms: 2,
             numberOfStudies: 2,
             hostName: "Host 27",
             hostJoinedOn: "Jun 2016",
             ameneties: [
                "Swimming Pool",
                "Wifi"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "3273e76e-8a39-405d-8241-5a711a39099d",
            name: "Hotel 917",
            category: "Surfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,100",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,2",
                "https://source.unsplash.com/400x300/?hotel,43",
                "https://source.unsplash.com/400x300/?hotel,38",
                "https://source.unsplash.com/400x300/?hotel,72"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 14457,
            rating: 3.66,
            numberOfBathrooms: 3,
            numberOfBeds: 3,
            numberOfguest: 8,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 24",
             hostJoinedOn: "Jan 2023",
             ameneties: [
                "Swimming Pool",
                "Pets Allowed",
                "Kitchen",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "85a4d5e5-c4f7-4328-92d0-accafd7ad18e",
            name: "Hotel 222",
            category: "Earth Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,71",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,31",
                "https://source.unsplash.com/400x300/?hotel,65",
                "https://source.unsplash.com/400x300/?hotel,51",
                "https://source.unsplash.com/400x300/?hotel,42"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 12462,
            rating: 4.5,
            numberOfBathrooms: 5,
            numberOfBeds: 4,
            numberOfguest: 3,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 13",
             hostJoinedOn: "Jul 2020",
             ameneties: [
                "Air Conditioning",
                "Wifi",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "5b321932-c8fc-4405-b9b3-c97aacb4ac2c",
            name: "Hotel 268",
            category: "Tiny Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,72",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,79",
                "https://source.unsplash.com/400x300/?hotel,47",
                "https://source.unsplash.com/400x300/?hotel,19",
                "https://source.unsplash.com/400x300/?hotel,13"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 10242,
            rating: 4.61,
            numberOfBathrooms: 3,
            numberOfBeds: 3,
            numberOfguest: 3,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 50",
             hostJoinedOn: "Apr 2022",
             ameneties: [
                "Air Conditioning",
                "Kitchen"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "abd5d78c-3ff8-46e9-9ad0-5d8334b974e8",
            name: "Hotel 487",
            category: "Lakefront",
            image: "https://source.unsplash.com/400x300/?hotel,room,8",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,6",
                "https://source.unsplash.com/400x300/?hotel,52",
                "https://source.unsplash.com/400x300/?hotel,36",
                "https://source.unsplash.com/400x300/?hotel,87"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 19039,
            rating: 4.58,
            numberOfBathrooms: 4,
            numberOfBeds: 3,
            numberOfguest: 6,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 47",
             hostJoinedOn: "Feb 2019",
             ameneties: [
                "Wifi",
                "Pets Allowed",
                "Kitchen"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "f92029a7-c80f-49de-a564-0e2f7436c299",
            name: "Hotel 262",
            category: "A-frames",
            image: "https://source.unsplash.com/400x300/?hotel,room,69",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,80",
                "https://source.unsplash.com/400x300/?hotel,37",
                "https://source.unsplash.com/400x300/?hotel,75",
                "https://source.unsplash.com/400x300/?hotel,91"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 4741,
            rating: 4.01,
            numberOfBathrooms: 5,
            numberOfBeds: 2,
            numberOfguest: 6,
             numberOfBedrooms: 1,
             numberOfStudies: 2,
             hostName: "Host 27",
             hostJoinedOn: "Jul 2023",
             ameneties: [
                "Parking",
                "Wifi",
                "Pets Allowed",
                "Air Conditioning",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "78e0f2f0-4d22-46f1-8844-ee1a9676f1ba",
            name: "Hotel 847",
            category: "Bed & Breakfast",
            image: "https://source.unsplash.com/400x300/?hotel,room,61",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,53",
                "https://source.unsplash.com/400x300/?hotel,46",
                "https://source.unsplash.com/400x300/?hotel,28",
                "https://source.unsplash.com/400x300/?hotel,100"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 16745,
            rating: 4.33,
            numberOfBathrooms: 4,
            numberOfBeds: 2,
            numberOfguest: 8,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 36",
             hostJoinedOn: "Aug 2023",
             ameneties: [
                "Pets Allowed",
                "Kitchen",
                "Parking"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "b19b0009-9243-4798-84d5-70a0f140f660",
            name: "Hotel 115",
            category: "Countryside",
            image: "https://source.unsplash.com/400x300/?hotel,room,45",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,81",
                "https://source.unsplash.com/400x300/?hotel,45",
                "https://source.unsplash.com/400x300/?hotel,3",
                "https://source.unsplash.com/400x300/?hotel,1"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 6018,
            rating: 4.27,
            numberOfBathrooms: 1,
            numberOfBeds: 2,
            numberOfguest: 1,
             numberOfBedrooms: 4,
             numberOfStudies: 2,
             hostName: "Host 22",
             hostJoinedOn: "Oct 2018",
             ameneties: [
                "Pets Allowed",
                "Parking",
                "Kitchen",
                "Swimming Pool",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "79499d20-814d-40d7-913c-72d689f0aa96",
            name: "Hotel 700",
            category: "Cabins",
            image: "https://source.unsplash.com/400x300/?hotel,room,94",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,21",
                "https://source.unsplash.com/400x300/?hotel,3",
                "https://source.unsplash.com/400x300/?hotel,69",
                "https://source.unsplash.com/400x300/?hotel,6"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 8625,
            rating: 4.19,
            numberOfBathrooms: 1,
            numberOfBeds: 4,
            numberOfguest: 3,
             numberOfBedrooms: 3,
             numberOfStudies: 2,
             hostName: "Host 48",
             hostJoinedOn: "Mar 2022",
             ameneties: [
                "Air Conditioning",
                "Parking",
                "Pets Allowed",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "63c65e34-51f2-4653-bb40-23d2ac82f0d4",
            name: "Hotel 947",
            category: "National Parks",
            image: "https://source.unsplash.com/400x300/?hotel,room,100",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,13",
                "https://source.unsplash.com/400x300/?hotel,66",
                "https://source.unsplash.com/400x300/?hotel,17",
                "https://source.unsplash.com/400x300/?hotel,86"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 3229,
            rating: 4.21,
            numberOfBathrooms: 3,
            numberOfBeds: 2,
            numberOfguest: 6,
             numberOfBedrooms: 1,
             numberOfStudies: 2,
             hostName: "Host 34",
             hostJoinedOn: "Apr 2019",
             ameneties: [
                "Air Conditioning",
                "Wifi",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "eea2cacb-d137-4507-8db3-777748ccfbb5",
            name: "Hotel 609",
            category: "Treehouses",
            image: "https://source.unsplash.com/400x300/?hotel,room,55",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,77",
                "https://source.unsplash.com/400x300/?hotel,67",
                "https://source.unsplash.com/400x300/?hotel,20",
                "https://source.unsplash.com/400x300/?hotel,58"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 9002,
            rating: 4.85,
            numberOfBathrooms: 3,
            numberOfBeds: 1,
            numberOfguest: 8,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 19",
             hostJoinedOn: "Dec 2016",
             ameneties: [
                "Pets Allowed",
                "Wifi"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "ef65f121-4b18-4bf9-9d1b-57373db2b5e8",
            name: "Hotel 383",
            category: "Bed & Breakfast",
            image: "https://source.unsplash.com/400x300/?hotel,room,94",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,41",
                "https://source.unsplash.com/400x300/?hotel,71",
                "https://source.unsplash.com/400x300/?hotel,57",
                "https://source.unsplash.com/400x300/?hotel,52"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 14065,
            rating: 4.89,
            numberOfBathrooms: 2,
            numberOfBeds: 2,
            numberOfguest: 4,
             numberOfBedrooms: 3,
             numberOfStudies: 2,
             hostName: "Host 42",
             hostJoinedOn: "Jun 2018",
             ameneties: [
                "Air Conditioning",
                "Pets Allowed",
                "Wifi"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "acf6bc59-06a0-4244-8703-4032f686d4d1",
            name: "Hotel 838",
            category: "National Parks",
            image: "https://source.unsplash.com/400x300/?hotel,room,87",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,2",
                "https://source.unsplash.com/400x300/?hotel,91",
                "https://source.unsplash.com/400x300/?hotel,23",
                "https://source.unsplash.com/400x300/?hotel,12"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 8872,
            rating: 4.97,
            numberOfBathrooms: 4,
            numberOfBeds: 4,
            numberOfguest: 6,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 26",
             hostJoinedOn: "Jul 2020",
             ameneties: [
                "Air Conditioning",
                "Parking",
                "Swimming Pool",
                "Pets Allowed",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "7b90716f-aab0-4d75-aa4a-709b3376cacf",
            name: "Hotel 320",
            category: "Treehouses",
            image: "https://source.unsplash.com/400x300/?hotel,room,91",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,28",
                "https://source.unsplash.com/400x300/?hotel,19",
                "https://source.unsplash.com/400x300/?hotel,69",
                "https://source.unsplash.com/400x300/?hotel,78"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 10088,
            rating: 4.04,
            numberOfBathrooms: 1,
            numberOfBeds: 1,
            numberOfguest: 4,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 3",
             hostJoinedOn: "Nov 2017",
             ameneties: [
                "Kitchen",
                "Wifi",
                "Swimming Pool",
                "Parking"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "9b0819ba-6c69-4852-9a07-0c5483fc32a4",
            name: "Hotel 243",
            category: "Golfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,15",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,18",
                "https://source.unsplash.com/400x300/?hotel,51",
                "https://source.unsplash.com/400x300/?hotel,90",
                "https://source.unsplash.com/400x300/?hotel,18"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 4052,
            rating: 4.23,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 2,
             numberOfBedrooms: 2,
             numberOfStudies: 0,
             hostName: "Host 15",
             hostJoinedOn: "Jul 2017",
             ameneties: [
                "Swimming Pool",
                "Kitchen",
                "Parking",
                "Wifi",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "9c50a1ab-2c74-4ea6-9ef9-3242cfbb979d",
            name: "Hotel 189",
            category: "Tiny Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,3",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,43",
                "https://source.unsplash.com/400x300/?hotel,60",
                "https://source.unsplash.com/400x300/?hotel,81",
                "https://source.unsplash.com/400x300/?hotel,13"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 14553,
            rating: 3.94,
            numberOfBathrooms: 1,
            numberOfBeds: 3,
            numberOfguest: 1,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 45",
             hostJoinedOn: "Jun 2016",
             ameneties: [
                "Kitchen",
                "Pets Allowed",
                "Swimming Pool",
                "Parking",
                "Wifi"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "49c013f2-5001-4839-b7bb-634d6477bf43",
            name: "Hotel 696",
            category: "Design",
            image: "https://source.unsplash.com/400x300/?hotel,room,22",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,33",
                "https://source.unsplash.com/400x300/?hotel,97",
                "https://source.unsplash.com/400x300/?hotel,30",
                "https://source.unsplash.com/400x300/?hotel,11"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 17619,
            rating: 4.29,
            numberOfBathrooms: 4,
            numberOfBeds: 4,
            numberOfguest: 8,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 12",
             hostJoinedOn: "Sep 2017",
             ameneties: [
                "Swimming Pool",
                "Kitchen",
                "Parking",
                "Pets Allowed",
                "Wifi"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "326111c6-520f-42dd-8dd9-915df54136b1",
            name: "Hotel 480",
            category: "Farms",
            image: "https://source.unsplash.com/400x300/?hotel,room,27",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,31",
                "https://source.unsplash.com/400x300/?hotel,82",
                "https://source.unsplash.com/400x300/?hotel,74",
                "https://source.unsplash.com/400x300/?hotel,35"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 2201,
            rating: 3.74,
            numberOfBathrooms: 3,
            numberOfBeds: 3,
            numberOfguest: 7,
             numberOfBedrooms: 2,
             numberOfStudies: 0,
             hostName: "Host 4",
             hostJoinedOn: "May 2021",
             ameneties: [
                "Kitchen",
                "Swimming Pool",
                "Wifi",
                "Air Conditioning",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "2b753e1a-a3ee-4eaf-8689-0e73dd569745",
            name: "Hotel 920",
            category: "Cabins",
            image: "https://source.unsplash.com/400x300/?hotel,room,97",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,46",
                "https://source.unsplash.com/400x300/?hotel,16",
                "https://source.unsplash.com/400x300/?hotel,72",
                "https://source.unsplash.com/400x300/?hotel,28"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 8059,
            rating: 4.08,
            numberOfBathrooms: 5,
            numberOfBeds: 3,
            numberOfguest: 1,
             numberOfBedrooms: 3,
             numberOfStudies: 1,
             hostName: "Host 37",
             hostJoinedOn: "Oct 2023",
             ameneties: [
                "Swimming Pool",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "d4069b6a-c1f8-49ac-a920-81d9a78b5cc9",
            name: "Hotel 819",
            category: "Farms",
            image: "https://source.unsplash.com/400x300/?hotel,room,100",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,49",
                "https://source.unsplash.com/400x300/?hotel,94",
                "https://source.unsplash.com/400x300/?hotel,41",
                "https://source.unsplash.com/400x300/?hotel,89"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 7210,
            rating: 4.79,
            numberOfBathrooms: 5,
            numberOfBeds: 1,
            numberOfguest: 8,
             numberOfBedrooms: 1,
             numberOfStudies: 2,
             hostName: "Host 32",
             hostJoinedOn: "Jan 2022",
             ameneties: [
                "Wifi",
                "Parking",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "f9a914d6-2cbd-4825-925b-6a8bec3666d2",
            name: "Hotel 691",
            category: "Historical Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,98",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,50",
                "https://source.unsplash.com/400x300/?hotel,84",
                "https://source.unsplash.com/400x300/?hotel,47",
                "https://source.unsplash.com/400x300/?hotel,58"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 10243,
            rating: 3.95,
            numberOfBathrooms: 4,
            numberOfBeds: 1,
            numberOfguest: 6,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 48",
             hostJoinedOn: "May 2015",
             ameneties: [
                "Swimming Pool",
                "Parking"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "93eea6e7-d223-40dd-97c1-7d07a7fdec01",
            name: "Hotel 326",
            category: "Castle",
            image: "https://source.unsplash.com/400x300/?hotel,room,56",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,30",
                "https://source.unsplash.com/400x300/?hotel,11",
                "https://source.unsplash.com/400x300/?hotel,9",
                "https://source.unsplash.com/400x300/?hotel,75"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 7777,
            rating: 4.1,
            numberOfBathrooms: 4,
            numberOfBeds: 3,
            numberOfguest: 2,
             numberOfBedrooms: 1,
             numberOfStudies: 2,
             hostName: "Host 44",
             hostJoinedOn: "Mar 2023",
             ameneties: [
                "Kitchen",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "ce30e4d5-4f40-49eb-b8ef-8d23d0696b4e",
            name: "Hotel 733",
            category: "Earth Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,100",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,76",
                "https://source.unsplash.com/400x300/?hotel,13",
                "https://source.unsplash.com/400x300/?hotel,61",
                "https://source.unsplash.com/400x300/?hotel,6"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 16569,
            rating: 4.76,
            numberOfBathrooms: 1,
            numberOfBeds: 4,
            numberOfguest: 4,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 28",
             hostJoinedOn: "Jun 2023",
             ameneties: [
                "Swimming Pool",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "3844e0e9-2bbd-4259-b2c2-c7f28f59f1fe",
            name: "Hotel 894",
            category: "Luxe",
            image: "https://source.unsplash.com/400x300/?hotel,room,2",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,18",
                "https://source.unsplash.com/400x300/?hotel,30",
                "https://source.unsplash.com/400x300/?hotel,5",
                "https://source.unsplash.com/400x300/?hotel,42"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 7177,
            rating: 4.16,
            numberOfBathrooms: 5,
            numberOfBeds: 4,
            numberOfguest: 3,
             numberOfBedrooms: 1,
             numberOfStudies: 2,
             hostName: "Host 20",
             hostJoinedOn: "Feb 2017",
             ameneties: [
                "Air Conditioning",
                "Swimming Pool",
                "Kitchen"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "0d22daae-0a0e-4dfc-a77f-492f5a59e293",
            name: "Hotel 120",
            category: "Countryside",
            image: "https://source.unsplash.com/400x300/?hotel,room,16",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,92",
                "https://source.unsplash.com/400x300/?hotel,52",
                "https://source.unsplash.com/400x300/?hotel,47",
                "https://source.unsplash.com/400x300/?hotel,61"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 11680,
            rating: 3.81,
            numberOfBathrooms: 3,
            numberOfBeds: 1,
            numberOfguest: 5,
             numberOfBedrooms: 2,
             numberOfStudies: 2,
             hostName: "Host 8",
             hostJoinedOn: "Jul 2023",
             ameneties: [
                "Swimming Pool",
                "Wifi"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "1d454096-27ad-4013-be99-2d1030b67297",
            name: "Hotel 890",
            category: "Treehouses",
            image: "https://source.unsplash.com/400x300/?hotel,room,92",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,12",
                "https://source.unsplash.com/400x300/?hotel,49",
                "https://source.unsplash.com/400x300/?hotel,73",
                "https://source.unsplash.com/400x300/?hotel,54"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 14148,
            rating: 4.65,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 1,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 30",
             hostJoinedOn: "Sep 2017",
             ameneties: [
                "Wifi",
                "Pets Allowed",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "24e6d586-22f2-4cbb-b269-bd9dfb03ee67",
            name: "Hotel 743",
            category: "Earth Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,9",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,96",
                "https://source.unsplash.com/400x300/?hotel,51",
                "https://source.unsplash.com/400x300/?hotel,80",
                "https://source.unsplash.com/400x300/?hotel,55"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 12051,
            rating: 4.93,
            numberOfBathrooms: 5,
            numberOfBeds: 2,
            numberOfguest: 3,
             numberOfBedrooms: 2,
             numberOfStudies: 0,
             hostName: "Host 41",
             hostJoinedOn: "Feb 2017",
             ameneties: [
                "Swimming Pool",
                "Wifi"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "976fdfa0-c166-4c10-b9cf-971576ac464d",
            name: "Hotel 318",
            category: "Island",
            image: "https://source.unsplash.com/400x300/?hotel,room,40",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,14",
                "https://source.unsplash.com/400x300/?hotel,40",
                "https://source.unsplash.com/400x300/?hotel,1",
                "https://source.unsplash.com/400x300/?hotel,52"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 4626,
            rating: 4.96,
            numberOfBathrooms: 3,
            numberOfBeds: 2,
            numberOfguest: 3,
             numberOfBedrooms: 2,
             numberOfStudies: 0,
             hostName: "Host 7",
             hostJoinedOn: "Jun 2016",
             ameneties: [
                "Parking",
                "Pets Allowed",
                "Wifi",
                "Kitchen"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "07dbda9a-60f6-48ce-a4db-f035e4ded1b7",
            name: "Hotel 141",
            category: "Castle",
            image: "https://source.unsplash.com/400x300/?hotel,room,77",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,26",
                "https://source.unsplash.com/400x300/?hotel,76",
                "https://source.unsplash.com/400x300/?hotel,63",
                "https://source.unsplash.com/400x300/?hotel,62"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 9627,
            rating: 4.12,
            numberOfBathrooms: 4,
            numberOfBeds: 3,
            numberOfguest: 6,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 32",
             hostJoinedOn: "Feb 2016",
             ameneties: [
                "Swimming Pool",
                "Wifi",
                "Pets Allowed",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "3c306d0d-d486-486c-9385-2a58741ef40b",
            name: "Hotel 579",
            category: "Bed & Breakfast",
            image: "https://source.unsplash.com/400x300/?hotel,room,16",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,27",
                "https://source.unsplash.com/400x300/?hotel,43",
                "https://source.unsplash.com/400x300/?hotel,53",
                "https://source.unsplash.com/400x300/?hotel,64"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 4659,
            rating: 4.25,
            numberOfBathrooms: 5,
            numberOfBeds: 1,
            numberOfguest: 7,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 45",
             hostJoinedOn: "Jan 2022",
             ameneties: [
                "Kitchen",
                "Swimming Pool",
                "Pets Allowed",
                "Wifi"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "ad2b3162-28da-4db9-a690-e616fa09be8c",
            name: "Hotel 159",
            category: "Surfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,50",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,97",
                "https://source.unsplash.com/400x300/?hotel,83",
                "https://source.unsplash.com/400x300/?hotel,95",
                "https://source.unsplash.com/400x300/?hotel,83"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 13353,
            rating: 4.59,
            numberOfBathrooms: 3,
            numberOfBeds: 1,
            numberOfguest: 5,
             numberOfBedrooms: 3,
             numberOfStudies: 2,
             hostName: "Host 23",
             hostJoinedOn: "Sep 2019",
             ameneties: [
                "Wifi",
                "Kitchen",
                "Swimming Pool",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "5e68ff3a-4d53-4e0c-9636-928b02846999",
            name: "Hotel 616",
            category: "Countryside",
            image: "https://source.unsplash.com/400x300/?hotel,room,3",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,45",
                "https://source.unsplash.com/400x300/?hotel,56",
                "https://source.unsplash.com/400x300/?hotel,55",
                "https://source.unsplash.com/400x300/?hotel,81"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 3991,
            rating: 4.21,
            numberOfBathrooms: 1,
            numberOfBeds: 4,
            numberOfguest: 7,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 30",
             hostJoinedOn: "Aug 2015",
             ameneties: [
                "Swimming Pool",
                "Kitchen",
                "Wifi",
                "Parking",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "d91a54f2-f3ed-4d7b-8895-ee9a4e8f7c9b",
            name: "Hotel 742",
            category: "Campervans",
            image: "https://source.unsplash.com/400x300/?hotel,room,69",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,56",
                "https://source.unsplash.com/400x300/?hotel,24",
                "https://source.unsplash.com/400x300/?hotel,76",
                "https://source.unsplash.com/400x300/?hotel,69"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 18641,
            rating: 4.71,
            numberOfBathrooms: 5,
            numberOfBeds: 2,
            numberOfguest: 5,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 25",
             hostJoinedOn: "Apr 2015",
             ameneties: [
                "Swimming Pool",
                "Wifi",
                "Parking",
                "Kitchen",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "a9cdd39f-af63-46d2-a90d-31e9b92fb4e3",
            name: "Hotel 751",
            category: "National Parks",
            image: "https://source.unsplash.com/400x300/?hotel,room,79",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,30",
                "https://source.unsplash.com/400x300/?hotel,57",
                "https://source.unsplash.com/400x300/?hotel,25",
                "https://source.unsplash.com/400x300/?hotel,72"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 5265,
            rating: 4.22,
            numberOfBathrooms: 5,
            numberOfBeds: 2,
            numberOfguest: 4,
             numberOfBedrooms: 1,
             numberOfStudies: 2,
             hostName: "Host 13",
             hostJoinedOn: "Oct 2020",
             ameneties: [
                "Air Conditioning",
                "Parking"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "f8c457a6-115b-4f41-9997-40ed886afea8",
            name: "Hotel 654",
            category: "Farms",
            image: "https://source.unsplash.com/400x300/?hotel,room,26",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,56",
                "https://source.unsplash.com/400x300/?hotel,41",
                "https://source.unsplash.com/400x300/?hotel,77",
                "https://source.unsplash.com/400x300/?hotel,99"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 14251,
            rating: 4.94,
            numberOfBathrooms: 4,
            numberOfBeds: 3,
            numberOfguest: 6,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 26",
             hostJoinedOn: "Mar 2015",
             ameneties: [
                "Kitchen",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "d32d0c86-3c73-4972-bb08-43373b69897e",
            name: "Hotel 693",
            category: "National Parks",
            image: "https://source.unsplash.com/400x300/?hotel,room,71",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,83",
                "https://source.unsplash.com/400x300/?hotel,92",
                "https://source.unsplash.com/400x300/?hotel,65",
                "https://source.unsplash.com/400x300/?hotel,30"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 16902,
            rating: 4.84,
            numberOfBathrooms: 3,
            numberOfBeds: 3,
            numberOfguest: 4,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 21",
             hostJoinedOn: "Sep 2023",
             ameneties: [
                "Pets Allowed",
                "Parking"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "8cfc67db-66d0-4fb4-8dcc-d4b5cde9f2e9",
            name: "Hotel 765",
            category: "Earth Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,15",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,29",
                "https://source.unsplash.com/400x300/?hotel,84",
                "https://source.unsplash.com/400x300/?hotel,16",
                "https://source.unsplash.com/400x300/?hotel,64"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 7689,
            rating: 3.71,
            numberOfBathrooms: 1,
            numberOfBeds: 3,
            numberOfguest: 1,
             numberOfBedrooms: 1,
             numberOfStudies: 2,
             hostName: "Host 11",
             hostJoinedOn: "Oct 2017",
             ameneties: [
                "Wifi",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "d4b62c8a-69b8-4dd4-b8d4-ac02de11113b",
            name: "Hotel 430",
            category: "Design",
            image: "https://source.unsplash.com/400x300/?hotel,room,68",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,32",
                "https://source.unsplash.com/400x300/?hotel,43",
                "https://source.unsplash.com/400x300/?hotel,95",
                "https://source.unsplash.com/400x300/?hotel,82"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 5077,
            rating: 3.68,
            numberOfBathrooms: 3,
            numberOfBeds: 2,
            numberOfguest: 3,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 47",
             hostJoinedOn: "Feb 2022",
             ameneties: [
                "Swimming Pool",
                "Parking"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "12f8741a-7acc-4d4f-ac03-2a3ad96d4dec",
            name: "Hotel 670",
            category: "Caves",
            image: "https://source.unsplash.com/400x300/?hotel,room,53",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,8",
                "https://source.unsplash.com/400x300/?hotel,21",
                "https://source.unsplash.com/400x300/?hotel,32",
                "https://source.unsplash.com/400x300/?hotel,71"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 5666,
            rating: 4.17,
            numberOfBathrooms: 4,
            numberOfBeds: 2,
            numberOfguest: 6,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 20",
             hostJoinedOn: "Jul 2021",
             ameneties: [
                "Swimming Pool",
                "Kitchen",
                "Parking",
                "Air Conditioning",
                "Wifi"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "696a72fb-41fd-4c40-9168-f4e7bb0ac72f",
            name: "Hotel 654",
            category: "Design",
            image: "https://source.unsplash.com/400x300/?hotel,room,10",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,44",
                "https://source.unsplash.com/400x300/?hotel,63",
                "https://source.unsplash.com/400x300/?hotel,4",
                "https://source.unsplash.com/400x300/?hotel,94"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 7994,
            rating: 4.14,
            numberOfBathrooms: 1,
            numberOfBeds: 3,
            numberOfguest: 7,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 4",
             hostJoinedOn: "Jul 2019",
             ameneties: [
                "Parking",
                "Wifi",
                "Kitchen",
                "Air Conditioning",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "8559db21-fd2b-4410-9419-3029b4b7542e",
            name: "Hotel 898",
            category: "Design",
            image: "https://source.unsplash.com/400x300/?hotel,room,20",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,5",
                "https://source.unsplash.com/400x300/?hotel,47",
                "https://source.unsplash.com/400x300/?hotel,82",
                "https://source.unsplash.com/400x300/?hotel,72"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 11206,
            rating: 3.94,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 1,
             numberOfBedrooms: 2,
             numberOfStudies: 0,
             hostName: "Host 33",
             hostJoinedOn: "Apr 2015",
             ameneties: [
                "Kitchen",
                "Pets Allowed",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "07a2a734-db20-4658-a59d-77e6add43156",
            name: "Hotel 564",
            category: "Farms",
            image: "https://source.unsplash.com/400x300/?hotel,room,6",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,33",
                "https://source.unsplash.com/400x300/?hotel,8",
                "https://source.unsplash.com/400x300/?hotel,87",
                "https://source.unsplash.com/400x300/?hotel,25"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 9946,
            rating: 3.63,
            numberOfBathrooms: 5,
            numberOfBeds: 3,
            numberOfguest: 4,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 9",
             hostJoinedOn: "Oct 2023",
             ameneties: [
                "Air Conditioning",
                "Swimming Pool",
                "Kitchen",
                "Wifi",
                "Parking"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "698582fb-e6b1-4ed7-92e7-65cbdd54aa90",
            name: "Hotel 299",
            category: "A-frames",
            image: "https://source.unsplash.com/400x300/?hotel,room,35",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,15",
                "https://source.unsplash.com/400x300/?hotel,66",
                "https://source.unsplash.com/400x300/?hotel,52",
                "https://source.unsplash.com/400x300/?hotel,25"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 6240,
            rating: 4.48,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 4,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 9",
             hostJoinedOn: "Sep 2017",
             ameneties: [
                "Wifi",
                "Pets Allowed",
                "Swimming Pool",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "e1448c40-2344-410b-90c9-0ca54167b73e",
            name: "Hotel 693",
            category: "Earth Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,16",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,19",
                "https://source.unsplash.com/400x300/?hotel,85",
                "https://source.unsplash.com/400x300/?hotel,8",
                "https://source.unsplash.com/400x300/?hotel,25"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 2932,
            rating: 4.22,
            numberOfBathrooms: 2,
            numberOfBeds: 4,
            numberOfguest: 3,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 20",
             hostJoinedOn: "Oct 2019",
             ameneties: [
                "Wifi",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "d38ac50d-225c-4926-8b78-2cffd6411c30",
            name: "Hotel 349",
            category: "Cabins",
            image: "https://source.unsplash.com/400x300/?hotel,room,47",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,82",
                "https://source.unsplash.com/400x300/?hotel,85",
                "https://source.unsplash.com/400x300/?hotel,48",
                "https://source.unsplash.com/400x300/?hotel,50"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 3215,
            rating: 4.22,
            numberOfBathrooms: 2,
            numberOfBeds: 4,
            numberOfguest: 7,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 41",
             hostJoinedOn: "Nov 2019",
             ameneties: [
                "Wifi",
                "Air Conditioning",
                "Pets Allowed",
                "Parking"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "0a88b237-640b-4daf-bb86-c4aaf21e288c",
            name: "Hotel 583",
            category: "Tropical",
            image: "https://source.unsplash.com/400x300/?hotel,room,1",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,58",
                "https://source.unsplash.com/400x300/?hotel,30",
                "https://source.unsplash.com/400x300/?hotel,76",
                "https://source.unsplash.com/400x300/?hotel,55"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 5533,
            rating: 3.6,
            numberOfBathrooms: 5,
            numberOfBeds: 2,
            numberOfguest: 7,
             numberOfBedrooms: 2,
             numberOfStudies: 0,
             hostName: "Host 34",
             hostJoinedOn: "Apr 2022",
             ameneties: [
                "Pets Allowed",
                "Swimming Pool",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "3ef12125-63ab-48ac-9f55-8d4d9e036d1d",
            name: "Hotel 571",
            category: "National Parks",
            image: "https://source.unsplash.com/400x300/?hotel,room,58",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,85",
                "https://source.unsplash.com/400x300/?hotel,83",
                "https://source.unsplash.com/400x300/?hotel,75",
                "https://source.unsplash.com/400x300/?hotel,70"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 10277,
            rating: 4.8,
            numberOfBathrooms: 3,
            numberOfBeds: 2,
            numberOfguest: 2,
             numberOfBedrooms: 2,
             numberOfStudies: 2,
             hostName: "Host 36",
             hostJoinedOn: "Aug 2016",
             ameneties: [
                "Swimming Pool",
                "Pets Allowed",
                "Wifi",
                "Kitchen",
                "Parking"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "f4665ab1-682f-43c6-9819-c9db98148816",
            name: "Hotel 905",
            category: "Farms",
            image: "https://source.unsplash.com/400x300/?hotel,room,82",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,65",
                "https://source.unsplash.com/400x300/?hotel,90",
                "https://source.unsplash.com/400x300/?hotel,43",
                "https://source.unsplash.com/400x300/?hotel,54"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 10031,
            rating: 4.95,
            numberOfBathrooms: 1,
            numberOfBeds: 2,
            numberOfguest: 7,
             numberOfBedrooms: 4,
             numberOfStudies: 2,
             hostName: "Host 36",
             hostJoinedOn: "Nov 2021",
             ameneties: [
                "Swimming Pool",
                "Parking",
                "Wifi",
                "Kitchen",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "f5d1493c-9e60-425f-83a0-0bd7f1951ce2",
            name: "Hotel 472",
            category: "Tropical",
            image: "https://source.unsplash.com/400x300/?hotel,room,31",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,67",
                "https://source.unsplash.com/400x300/?hotel,58",
                "https://source.unsplash.com/400x300/?hotel,70",
                "https://source.unsplash.com/400x300/?hotel,30"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 10195,
            rating: 4.34,
            numberOfBathrooms: 4,
            numberOfBeds: 2,
            numberOfguest: 7,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 26",
             hostJoinedOn: "Apr 2023",
             ameneties: [
                "Wifi",
                "Parking",
                "Kitchen",
                "Swimming Pool",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "2eee8e19-32eb-45dc-9899-6f32cf513e52",
            name: "Hotel 632",
            category: "Treehouses",
            image: "https://source.unsplash.com/400x300/?hotel,room,79",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,82",
                "https://source.unsplash.com/400x300/?hotel,60",
                "https://source.unsplash.com/400x300/?hotel,71",
                "https://source.unsplash.com/400x300/?hotel,38"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 8246,
            rating: 4.99,
            numberOfBathrooms: 4,
            numberOfBeds: 2,
            numberOfguest: 5,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 4",
             hostJoinedOn: "Apr 2017",
             ameneties: [
                "Air Conditioning",
                "Wifi"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "4c5ed7fb-803e-479f-ba19-6b104412d462",
            name: "Hotel 279",
            category: "Historical Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,50",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,56",
                "https://source.unsplash.com/400x300/?hotel,88",
                "https://source.unsplash.com/400x300/?hotel,12",
                "https://source.unsplash.com/400x300/?hotel,4"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 3628,
            rating: 4.33,
            numberOfBathrooms: 3,
            numberOfBeds: 2,
            numberOfguest: 7,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 31",
             hostJoinedOn: "Nov 2017",
             ameneties: [
                "Pets Allowed",
                "Air Conditioning",
                "Kitchen"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "fc876391-2301-4126-8583-7befa3b16aa0",
            name: "Hotel 734",
            category: "Bed & Breakfast",
            image: "https://source.unsplash.com/400x300/?hotel,room,10",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,94",
                "https://source.unsplash.com/400x300/?hotel,15",
                "https://source.unsplash.com/400x300/?hotel,23",
                "https://source.unsplash.com/400x300/?hotel,4"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 2728,
            rating: 4.77,
            numberOfBathrooms: 5,
            numberOfBeds: 1,
            numberOfguest: 7,
             numberOfBedrooms: 4,
             numberOfStudies: 2,
             hostName: "Host 4",
             hostJoinedOn: "Oct 2022",
             ameneties: [
                "Wifi",
                "Swimming Pool",
                "Parking",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "8673c54f-307d-44bd-9ad1-b71b05973f48",
            name: "Hotel 460",
            category: "Luxe",
            image: "https://source.unsplash.com/400x300/?hotel,room,3",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,32",
                "https://source.unsplash.com/400x300/?hotel,58",
                "https://source.unsplash.com/400x300/?hotel,85",
                "https://source.unsplash.com/400x300/?hotel,75"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 13110,
            rating: 3.77,
            numberOfBathrooms: 1,
            numberOfBeds: 1,
            numberOfguest: 5,
             numberOfBedrooms: 3,
             numberOfStudies: 2,
             hostName: "Host 27",
             hostJoinedOn: "Jan 2023",
             ameneties: [
                "Kitchen",
                "Pets Allowed",
                "Wifi",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "5d065c5a-a6c0-4b47-9345-ad88c0c8378f",
            name: "Hotel 813",
            category: "Island",
            image: "https://source.unsplash.com/400x300/?hotel,room,9",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,85",
                "https://source.unsplash.com/400x300/?hotel,96",
                "https://source.unsplash.com/400x300/?hotel,29",
                "https://source.unsplash.com/400x300/?hotel,42"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 6647,
            rating: 4.63,
            numberOfBathrooms: 4,
            numberOfBeds: 1,
            numberOfguest: 3,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 16",
             hostJoinedOn: "Jul 2019",
             ameneties: [
                "Swimming Pool",
                "Parking",
                "Kitchen",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "e15d183b-4b2d-4aee-96e2-99142b408f5c",
            name: "Hotel 176",
            category: "A-frames",
            image: "https://source.unsplash.com/400x300/?hotel,room,9",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,55",
                "https://source.unsplash.com/400x300/?hotel,61",
                "https://source.unsplash.com/400x300/?hotel,52",
                "https://source.unsplash.com/400x300/?hotel,89"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 15462,
            rating: 4.36,
            numberOfBathrooms: 4,
            numberOfBeds: 3,
            numberOfguest: 2,
             numberOfBedrooms: 1,
             numberOfStudies: 2,
             hostName: "Host 32",
             hostJoinedOn: "Dec 2022",
             ameneties: [
                "Wifi",
                "Air Conditioning",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "dc5b45cc-f545-4f5f-953d-a2c014eee021",
            name: "Hotel 534",
            category: "Countryside",
            image: "https://source.unsplash.com/400x300/?hotel,room,100",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,77",
                "https://source.unsplash.com/400x300/?hotel,97",
                "https://source.unsplash.com/400x300/?hotel,34",
                "https://source.unsplash.com/400x300/?hotel,34"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 13754,
            rating: 4.21,
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 7,
             numberOfBedrooms: 2,
             numberOfStudies: 0,
             hostName: "Host 32",
             hostJoinedOn: "Jul 2016",
             ameneties: [
                "Kitchen",
                "Wifi",
                "Parking",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "5f405644-8174-419a-9dd7-91e01f46083d",
            name: "Hotel 372",
            category: "Caves",
            image: "https://source.unsplash.com/400x300/?hotel,room,80",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,81",
                "https://source.unsplash.com/400x300/?hotel,81",
                "https://source.unsplash.com/400x300/?hotel,46",
                "https://source.unsplash.com/400x300/?hotel,91"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 15058,
            rating: 3.55,
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 5,
             numberOfBedrooms: 4,
             numberOfStudies: 2,
             hostName: "Host 2",
             hostJoinedOn: "Mar 2018",
             ameneties: [
                "Wifi",
                "Kitchen",
                "Swimming Pool",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "c5369785-c639-4ef1-b0bc-edb3ebd0791b",
            name: "Hotel 685",
            category: "Bed & Breakfast",
            image: "https://source.unsplash.com/400x300/?hotel,room,98",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,81",
                "https://source.unsplash.com/400x300/?hotel,14",
                "https://source.unsplash.com/400x300/?hotel,98",
                "https://source.unsplash.com/400x300/?hotel,18"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 14516,
            rating: 3.85,
            numberOfBathrooms: 2,
            numberOfBeds: 3,
            numberOfguest: 8,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 14",
             hostJoinedOn: "Jul 2020",
             ameneties: [
                "Swimming Pool",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "09d7241d-b8f8-407b-b37e-682e1aa231e5",
            name: "Hotel 348",
            category: "A-frames",
            image: "https://source.unsplash.com/400x300/?hotel,room,91",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,46",
                "https://source.unsplash.com/400x300/?hotel,37",
                "https://source.unsplash.com/400x300/?hotel,84",
                "https://source.unsplash.com/400x300/?hotel,61"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 9296,
            rating: 4.66,
            numberOfBathrooms: 3,
            numberOfBeds: 2,
            numberOfguest: 1,
             numberOfBedrooms: 4,
             numberOfStudies: 2,
             hostName: "Host 23",
             hostJoinedOn: "Sep 2016",
             ameneties: [
                "Air Conditioning",
                "Wifi",
                "Swimming Pool",
                "Kitchen"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "5d0dc6fd-c75a-435f-9059-cf2400264f84",
            name: "Hotel 972",
            category: "Caves",
            image: "https://source.unsplash.com/400x300/?hotel,room,16",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,13",
                "https://source.unsplash.com/400x300/?hotel,93",
                "https://source.unsplash.com/400x300/?hotel,21",
                "https://source.unsplash.com/400x300/?hotel,38"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 6758,
            rating: 4.17,
            numberOfBathrooms: 4,
            numberOfBeds: 4,
            numberOfguest: 2,
             numberOfBedrooms: 4,
             numberOfStudies: 2,
             hostName: "Host 4",
             hostJoinedOn: "Aug 2016",
             ameneties: [
                "Swimming Pool",
                "Wifi",
                "Parking",
                "Kitchen",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "b7d04e03-ff70-4af6-a341-01c5d8a33941",
            name: "Hotel 130",
            category: "Campervans",
            image: "https://source.unsplash.com/400x300/?hotel,room,90",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,96",
                "https://source.unsplash.com/400x300/?hotel,65",
                "https://source.unsplash.com/400x300/?hotel,70",
                "https://source.unsplash.com/400x300/?hotel,86"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 14664,
            rating: 4.2,
            numberOfBathrooms: 3,
            numberOfBeds: 3,
            numberOfguest: 8,
             numberOfBedrooms: 4,
             numberOfStudies: 2,
             hostName: "Host 50",
             hostJoinedOn: "Apr 2018",
             ameneties: [
                "Kitchen",
                "Wifi",
                "Parking"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "b83732cd-e784-4e1d-97e2-2ba45a6fbcf5",
            name: "Hotel 146",
            category: "Island",
            image: "https://source.unsplash.com/400x300/?hotel,room,54",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,5",
                "https://source.unsplash.com/400x300/?hotel,38",
                "https://source.unsplash.com/400x300/?hotel,94",
                "https://source.unsplash.com/400x300/?hotel,80"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 3024,
            rating: 4.7,
            numberOfBathrooms: 1,
            numberOfBeds: 3,
            numberOfguest: 2,
             numberOfBedrooms: 2,
             numberOfStudies: 0,
             hostName: "Host 45",
             hostJoinedOn: "Nov 2022",
             ameneties: [
                "Wifi",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "cdf0e456-fe85-4ecd-9624-ea5818be6fd0",
            name: "Hotel 212",
            category: "Tropical",
            image: "https://source.unsplash.com/400x300/?hotel,room,94",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,93",
                "https://source.unsplash.com/400x300/?hotel,50",
                "https://source.unsplash.com/400x300/?hotel,95",
                "https://source.unsplash.com/400x300/?hotel,25"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 9749,
            rating: 3.88,
            numberOfBathrooms: 1,
            numberOfBeds: 4,
            numberOfguest: 1,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 20",
             hostJoinedOn: "Mar 2018",
             ameneties: [
                "Air Conditioning",
                "Parking",
                "Swimming Pool",
                "Wifi"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "faa2bea0-6eed-44c9-b67c-16a242d9ba1e",
            name: "Hotel 186",
            category: "National Parks",
            image: "https://source.unsplash.com/400x300/?hotel,room,55",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,43",
                "https://source.unsplash.com/400x300/?hotel,3",
                "https://source.unsplash.com/400x300/?hotel,94",
                "https://source.unsplash.com/400x300/?hotel,40"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 17671,
            rating: 4.27,
            numberOfBathrooms: 2,
            numberOfBeds: 2,
            numberOfguest: 6,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 38",
             hostJoinedOn: "Oct 2016",
             ameneties: [
                "Kitchen",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "d16c9e00-b058-4439-9daa-5beb51deec21",
            name: "Hotel 355",
            category: "Luxe",
            image: "https://source.unsplash.com/400x300/?hotel,room,8",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,88",
                "https://source.unsplash.com/400x300/?hotel,3",
                "https://source.unsplash.com/400x300/?hotel,74",
                "https://source.unsplash.com/400x300/?hotel,23"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 12630,
            rating: 3.52,
            numberOfBathrooms: 1,
            numberOfBeds: 4,
            numberOfguest: 3,
             numberOfBedrooms: 2,
             numberOfStudies: 2,
             hostName: "Host 25",
             hostJoinedOn: "Jun 2023",
             ameneties: [
                "Swimming Pool",
                "Parking",
                "Wifi",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "0485e74b-9e08-4127-a406-f62eb13b7283",
            name: "Hotel 583",
            category: "Iconic Sites",
            image: "https://source.unsplash.com/400x300/?hotel,room,96",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,9",
                "https://source.unsplash.com/400x300/?hotel,100",
                "https://source.unsplash.com/400x300/?hotel,89",
                "https://source.unsplash.com/400x300/?hotel,56"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 16878,
            rating: 4.09,
            numberOfBathrooms: 5,
            numberOfBeds: 3,
            numberOfguest: 1,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 12",
             hostJoinedOn: "Mar 2017",
             ameneties: [
                "Kitchen",
                "Parking",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "180c370a-c817-45fc-a4f8-fbdd785fbdf3",
            name: "Hotel 550",
            category: "Treehouses",
            image: "https://source.unsplash.com/400x300/?hotel,room,82",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,84",
                "https://source.unsplash.com/400x300/?hotel,49",
                "https://source.unsplash.com/400x300/?hotel,74",
                "https://source.unsplash.com/400x300/?hotel,79"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 17555,
            rating: 3.95,
            numberOfBathrooms: 2,
            numberOfBeds: 3,
            numberOfguest: 7,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 38",
             hostJoinedOn: "May 2020",
             ameneties: [
                "Air Conditioning",
                "Kitchen",
                "Wifi",
                "Pets Allowed",
                "Parking"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "ac7db3d0-077d-4a2b-96a6-a1a4fd874da5",
            name: "Hotel 850",
            category: "National Parks",
            image: "https://source.unsplash.com/400x300/?hotel,room,38",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,98",
                "https://source.unsplash.com/400x300/?hotel,55",
                "https://source.unsplash.com/400x300/?hotel,4",
                "https://source.unsplash.com/400x300/?hotel,100"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 17220,
            rating: 3.94,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 4,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 49",
             hostJoinedOn: "Nov 2016",
             ameneties: [
                "Wifi",
                "Swimming Pool",
                "Kitchen",
                "Parking"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "bf4ba3d5-483a-47ac-9494-3aaa197aa14f",
            name: "Hotel 814",
            category: "Historical Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,62",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,87",
                "https://source.unsplash.com/400x300/?hotel,13",
                "https://source.unsplash.com/400x300/?hotel,45",
                "https://source.unsplash.com/400x300/?hotel,37"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 17727,
            rating: 4.12,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 6,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 34",
             hostJoinedOn: "Jan 2015",
             ameneties: [
                "Pets Allowed",
                "Swimming Pool",
                "Air Conditioning",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "52c1eb67-be0a-44ea-ae9f-6978be2b49dc",
            name: "Hotel 681",
            category: "Castle",
            image: "https://source.unsplash.com/400x300/?hotel,room,39",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,8",
                "https://source.unsplash.com/400x300/?hotel,31",
                "https://source.unsplash.com/400x300/?hotel,93",
                "https://source.unsplash.com/400x300/?hotel,13"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 13099,
            rating: 3.68,
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 11",
             hostJoinedOn: "May 2015",
             ameneties: [
                "Air Conditioning",
                "Swimming Pool",
                "Wifi",
                "Pets Allowed",
                "Kitchen"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "0182b1e0-f1fa-4388-b886-70b0aaab4005",
            name: "Hotel 354",
            category: "National Parks",
            image: "https://source.unsplash.com/400x300/?hotel,room,46",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,95",
                "https://source.unsplash.com/400x300/?hotel,96",
                "https://source.unsplash.com/400x300/?hotel,93",
                "https://source.unsplash.com/400x300/?hotel,3"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 4602,
            rating: 4.38,
            numberOfBathrooms: 2,
            numberOfBeds: 3,
            numberOfguest: 3,
             numberOfBedrooms: 2,
             numberOfStudies: 0,
             hostName: "Host 26",
             hostJoinedOn: "May 2023",
             ameneties: [
                "Air Conditioning",
                "Swimming Pool",
                "Parking",
                "Kitchen",
                "Wifi"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "3bcc08e2-323f-4cd0-bc2d-0acefc097a3d",
            name: "Hotel 861",
            category: "Shared Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,8",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,18",
                "https://source.unsplash.com/400x300/?hotel,78",
                "https://source.unsplash.com/400x300/?hotel,69",
                "https://source.unsplash.com/400x300/?hotel,64"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 16714,
            rating: 3.66,
            numberOfBathrooms: 3,
            numberOfBeds: 3,
            numberOfguest: 8,
             numberOfBedrooms: 1,
             numberOfStudies: 2,
             hostName: "Host 33",
             hostJoinedOn: "Apr 2016",
             ameneties: [
                "Kitchen",
                "Air Conditioning",
                "Parking",
                "Swimming Pool",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "9b1cd650-bf1a-435b-8c10-3cf3e72f498b",
            name: "Hotel 526",
            category: "Campervans",
            image: "https://source.unsplash.com/400x300/?hotel,room,31",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,42",
                "https://source.unsplash.com/400x300/?hotel,56",
                "https://source.unsplash.com/400x300/?hotel,41",
                "https://source.unsplash.com/400x300/?hotel,14"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 10494,
            rating: 4.07,
            numberOfBathrooms: 4,
            numberOfBeds: 1,
            numberOfguest: 1,
             numberOfBedrooms: 2,
             numberOfStudies: 0,
             hostName: "Host 42",
             hostJoinedOn: "Jun 2017",
             ameneties: [
                "Wifi",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "ff480da9-a8af-4b7e-9e2b-09d13eddbc89",
            name: "Hotel 927",
            category: "Castle",
            image: "https://source.unsplash.com/400x300/?hotel,room,37",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,99",
                "https://source.unsplash.com/400x300/?hotel,59",
                "https://source.unsplash.com/400x300/?hotel,91",
                "https://source.unsplash.com/400x300/?hotel,47"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 3094,
            rating: 3.68,
            numberOfBathrooms: 4,
            numberOfBeds: 1,
            numberOfguest: 8,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 30",
             hostJoinedOn: "Nov 2017",
             ameneties: [
                "Parking",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "847f71f9-8120-49c3-b16a-5cc3557d0da1",
            name: "Hotel 626",
            category: "Historical Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,14",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,95",
                "https://source.unsplash.com/400x300/?hotel,73",
                "https://source.unsplash.com/400x300/?hotel,64",
                "https://source.unsplash.com/400x300/?hotel,38"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 14638,
            rating: 3.73,
            numberOfBathrooms: 5,
            numberOfBeds: 2,
            numberOfguest: 4,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 6",
             hostJoinedOn: "Jul 2023",
             ameneties: [
                "Air Conditioning",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "b6c02cd0-8f38-4d1e-8c2f-0048bf9f2c9c",
            name: "Hotel 787",
            category: "Cabins",
            image: "https://source.unsplash.com/400x300/?hotel,room,88",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,50",
                "https://source.unsplash.com/400x300/?hotel,54",
                "https://source.unsplash.com/400x300/?hotel,4",
                "https://source.unsplash.com/400x300/?hotel,3"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 8236,
            rating: 3.91,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 6,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 4",
             hostJoinedOn: "Jun 2018",
             ameneties: [
                "Air Conditioning",
                "Kitchen",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "cb01299c-7a78-49d1-9e78-a2b7860562f2",
            name: "Hotel 854",
            category: "Lakefront",
            image: "https://source.unsplash.com/400x300/?hotel,room,100",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,81",
                "https://source.unsplash.com/400x300/?hotel,71",
                "https://source.unsplash.com/400x300/?hotel,78",
                "https://source.unsplash.com/400x300/?hotel,34"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 13695,
            rating: 4.0,
            numberOfBathrooms: 5,
            numberOfBeds: 2,
            numberOfguest: 2,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 28",
             hostJoinedOn: "Nov 2018",
             ameneties: [
                "Wifi",
                "Parking"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "572ea6f3-844b-4c56-855e-064ecd8d3ec4",
            name: "Hotel 106",
            category: "Farms",
            image: "https://source.unsplash.com/400x300/?hotel,room,72",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,55",
                "https://source.unsplash.com/400x300/?hotel,63",
                "https://source.unsplash.com/400x300/?hotel,68",
                "https://source.unsplash.com/400x300/?hotel,89"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 10330,
            rating: 3.84,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 8,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 25",
             hostJoinedOn: "Feb 2017",
             ameneties: [
                "Wifi",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "75dca487-8747-4f4d-9f2a-5fd4840b91dc",
            name: "Hotel 950",
            category: "Golfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,20",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,4",
                "https://source.unsplash.com/400x300/?hotel,17",
                "https://source.unsplash.com/400x300/?hotel,86",
                "https://source.unsplash.com/400x300/?hotel,37"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 19998,
            rating: 4.82,
            numberOfBathrooms: 2,
            numberOfBeds: 3,
            numberOfguest: 5,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 3",
             hostJoinedOn: "Mar 2020",
             ameneties: [
                "Air Conditioning",
                "Wifi",
                "Pets Allowed",
                "Swimming Pool",
                "Parking"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "a991a7f2-d9ef-452a-924a-e7a2a1a33c03",
            name: "Hotel 894",
            category: "Campervans",
            image: "https://source.unsplash.com/400x300/?hotel,room,91",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,71",
                "https://source.unsplash.com/400x300/?hotel,20",
                "https://source.unsplash.com/400x300/?hotel,29",
                "https://source.unsplash.com/400x300/?hotel,54"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 10068,
            rating: 3.72,
            numberOfBathrooms: 2,
            numberOfBeds: 2,
            numberOfguest: 8,
             numberOfBedrooms: 3,
             numberOfStudies: 1,
             hostName: "Host 10",
             hostJoinedOn: "Oct 2019",
             ameneties: [
                "Air Conditioning",
                "Parking"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "c0cc804b-08f6-4da4-88e2-c7ec03213dd1",
            name: "Hotel 697",
            category: "Castle",
            image: "https://source.unsplash.com/400x300/?hotel,room,11",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,7",
                "https://source.unsplash.com/400x300/?hotel,86",
                "https://source.unsplash.com/400x300/?hotel,5",
                "https://source.unsplash.com/400x300/?hotel,51"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 13992,
            rating: 4.82,
            numberOfBathrooms: 5,
            numberOfBeds: 4,
            numberOfguest: 6,
             numberOfBedrooms: 1,
             numberOfStudies: 2,
             hostName: "Host 1",
             hostJoinedOn: "Apr 2020",
             ameneties: [
                "Pets Allowed",
                "Parking",
                "Kitchen",
                "Air Conditioning",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "a3f09906-81bc-4b11-9d27-4a200bb69027",
            name: "Hotel 961",
            category: "Earth Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,92",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,10",
                "https://source.unsplash.com/400x300/?hotel,43",
                "https://source.unsplash.com/400x300/?hotel,97",
                "https://source.unsplash.com/400x300/?hotel,90"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 17841,
            rating: 4.3,
            numberOfBathrooms: 4,
            numberOfBeds: 3,
            numberOfguest: 3,
             numberOfBedrooms: 3,
             numberOfStudies: 1,
             hostName: "Host 38",
             hostJoinedOn: "Feb 2017",
             ameneties: [
                "Swimming Pool",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "98ad3d34-1a1e-4239-b296-6c9b3cfbfd49",
            name: "Hotel 126",
            category: "Iconic Sites",
            image: "https://source.unsplash.com/400x300/?hotel,room,52",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,7",
                "https://source.unsplash.com/400x300/?hotel,71",
                "https://source.unsplash.com/400x300/?hotel,27",
                "https://source.unsplash.com/400x300/?hotel,87"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 7177,
            rating: 4.63,
            numberOfBathrooms: 5,
            numberOfBeds: 2,
            numberOfguest: 8,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 12",
             hostJoinedOn: "Jun 2019",
             ameneties: [
                "Swimming Pool",
                "Parking",
                "Pets Allowed",
                "Kitchen",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "5a415acb-c75c-435c-bc8c-a92cf196488a",
            name: "Hotel 739",
            category: "Cabins",
            image: "https://source.unsplash.com/400x300/?hotel,room,67",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,58",
                "https://source.unsplash.com/400x300/?hotel,86",
                "https://source.unsplash.com/400x300/?hotel,10",
                "https://source.unsplash.com/400x300/?hotel,82"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 2825,
            rating: 4.03,
            numberOfBathrooms: 2,
            numberOfBeds: 4,
            numberOfguest: 8,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 32",
             hostJoinedOn: "Aug 2018",
             ameneties: [
                "Wifi",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "dababadd-c22d-425a-9301-7f0b35050647",
            name: "Hotel 574",
            category: "Tropical",
            image: "https://source.unsplash.com/400x300/?hotel,room,95",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,74",
                "https://source.unsplash.com/400x300/?hotel,37",
                "https://source.unsplash.com/400x300/?hotel,14",
                "https://source.unsplash.com/400x300/?hotel,68"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 4947,
            rating: 3.64,
            numberOfBathrooms: 3,
            numberOfBeds: 1,
            numberOfguest: 1,
             numberOfBedrooms: 1,
             numberOfStudies: 2,
             hostName: "Host 42",
             hostJoinedOn: "May 2018",
             ameneties: [
                "Wifi",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "14daa947-7149-4fbd-9421-6dd1864f36ea",
            name: "Hotel 568",
            category: "Island",
            image: "https://source.unsplash.com/400x300/?hotel,room,89",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,14",
                "https://source.unsplash.com/400x300/?hotel,78",
                "https://source.unsplash.com/400x300/?hotel,17",
                "https://source.unsplash.com/400x300/?hotel,3"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 10907,
            rating: 4.03,
            numberOfBathrooms: 5,
            numberOfBeds: 1,
            numberOfguest: 2,
             numberOfBedrooms: 2,
             numberOfStudies: 2,
             hostName: "Host 7",
             hostJoinedOn: "Oct 2017",
             ameneties: [
                "Pets Allowed",
                "Parking"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "14adbad6-c633-43cf-994a-b7a6b85d12f0",
            name: "Hotel 154",
            category: "Iconic Sites",
            image: "https://source.unsplash.com/400x300/?hotel,room,69",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,94",
                "https://source.unsplash.com/400x300/?hotel,33",
                "https://source.unsplash.com/400x300/?hotel,75",
                "https://source.unsplash.com/400x300/?hotel,72"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 19898,
            rating: 4.28,
            numberOfBathrooms: 1,
            numberOfBeds: 3,
            numberOfguest: 4,
             numberOfBedrooms: 3,
             numberOfStudies: 2,
             hostName: "Host 13",
             hostJoinedOn: "Nov 2016",
             ameneties: [
                "Parking",
                "Kitchen",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "4af2c631-9c79-4586-8163-a193db2a0acf",
            name: "Hotel 537",
            category: "Historical Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,23",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,28",
                "https://source.unsplash.com/400x300/?hotel,23",
                "https://source.unsplash.com/400x300/?hotel,9",
                "https://source.unsplash.com/400x300/?hotel,85"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 16493,
            rating: 4.45,
            numberOfBathrooms: 5,
            numberOfBeds: 1,
            numberOfguest: 5,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 13",
             hostJoinedOn: "May 2020",
             ameneties: [
                "Kitchen",
                "Air Conditioning",
                "Swimming Pool",
                "Wifi",
                "Parking"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "27ba658f-122e-42d9-b81b-2aa8bad586da",
            name: "Hotel 237",
            category: "National Parks",
            image: "https://source.unsplash.com/400x300/?hotel,room,86",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,69",
                "https://source.unsplash.com/400x300/?hotel,83",
                "https://source.unsplash.com/400x300/?hotel,98",
                "https://source.unsplash.com/400x300/?hotel,66"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 17927,
            rating: 3.55,
            numberOfBathrooms: 5,
            numberOfBeds: 3,
            numberOfguest: 7,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 41",
             hostJoinedOn: "May 2018",
             ameneties: [
                "Swimming Pool",
                "Pets Allowed",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "937bf354-d83b-4dac-9554-45640d3fe145",
            name: "Hotel 255",
            category: "Iconic Sites",
            image: "https://source.unsplash.com/400x300/?hotel,room,1",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,97",
                "https://source.unsplash.com/400x300/?hotel,77",
                "https://source.unsplash.com/400x300/?hotel,41",
                "https://source.unsplash.com/400x300/?hotel,52"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 2627,
            rating: 4.13,
            numberOfBathrooms: 5,
            numberOfBeds: 3,
            numberOfguest: 6,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 10",
             hostJoinedOn: "May 2018",
             ameneties: [
                "Swimming Pool",
                "Air Conditioning",
                "Wifi",
                "Parking"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "8c1a8174-d2f1-417f-9106-51010ace24d0",
            name: "Hotel 564",
            category: "Tiny Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,49",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,87",
                "https://source.unsplash.com/400x300/?hotel,55",
                "https://source.unsplash.com/400x300/?hotel,23",
                "https://source.unsplash.com/400x300/?hotel,38"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 19460,
            rating: 4.64,
            numberOfBathrooms: 2,
            numberOfBeds: 4,
            numberOfguest: 2,
             numberOfBedrooms: 2,
             numberOfStudies: 2,
             hostName: "Host 8",
             hostJoinedOn: "Apr 2015",
             ameneties: [
                "Wifi",
                "Swimming Pool",
                "Parking",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "66c222d2-8f69-41f0-b66a-d003c8fa83d5",
            name: "Hotel 490",
            category: "Lakefront",
            image: "https://source.unsplash.com/400x300/?hotel,room,68",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,2",
                "https://source.unsplash.com/400x300/?hotel,84",
                "https://source.unsplash.com/400x300/?hotel,45",
                "https://source.unsplash.com/400x300/?hotel,100"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 13449,
            rating: 3.67,
            numberOfBathrooms: 4,
            numberOfBeds: 4,
            numberOfguest: 7,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 35",
             hostJoinedOn: "Dec 2020",
             ameneties: [
                "Kitchen",
                "Swimming Pool",
                "Parking",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "21153bc3-473e-460a-9816-1e03fd23144e",
            name: "Hotel 433",
            category: "Bed & Breakfast",
            image: "https://source.unsplash.com/400x300/?hotel,room,52",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,77",
                "https://source.unsplash.com/400x300/?hotel,85",
                "https://source.unsplash.com/400x300/?hotel,65",
                "https://source.unsplash.com/400x300/?hotel,63"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 15157,
            rating: 3.63,
            numberOfBathrooms: 1,
            numberOfBeds: 4,
            numberOfguest: 5,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 50",
             hostJoinedOn: "Jul 2019",
             ameneties: [
                "Parking",
                "Pets Allowed",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "a88d5ef6-e000-4a12-b495-935abbd431f7",
            name: "Hotel 341",
            category: "Iconic Sites",
            image: "https://source.unsplash.com/400x300/?hotel,room,71",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,32",
                "https://source.unsplash.com/400x300/?hotel,97",
                "https://source.unsplash.com/400x300/?hotel,13",
                "https://source.unsplash.com/400x300/?hotel,61"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 5102,
            rating: 4.25,
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 14",
             hostJoinedOn: "Nov 2015",
             ameneties: [
                "Wifi",
                "Kitchen",
                "Air Conditioning",
                "Pets Allowed",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "92f75b76-7d5a-4967-b4a6-873dbfbb4d91",
            name: "Hotel 792",
            category: "Earth Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,10",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,12",
                "https://source.unsplash.com/400x300/?hotel,79",
                "https://source.unsplash.com/400x300/?hotel,76",
                "https://source.unsplash.com/400x300/?hotel,4"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 6670,
            rating: 4.08,
            numberOfBathrooms: 2,
            numberOfBeds: 2,
            numberOfguest: 8,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 41",
             hostJoinedOn: "Aug 2020",
             ameneties: [
                "Pets Allowed",
                "Wifi",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "2e2e38d5-c4f9-4122-b59d-8dc9d6afd7d2",
            name: "Hotel 543",
            category: "Cabins",
            image: "https://source.unsplash.com/400x300/?hotel,room,59",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,23",
                "https://source.unsplash.com/400x300/?hotel,62",
                "https://source.unsplash.com/400x300/?hotel,40",
                "https://source.unsplash.com/400x300/?hotel,19"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 15512,
            rating: 4.54,
            numberOfBathrooms: 3,
            numberOfBeds: 2,
            numberOfguest: 4,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 36",
             hostJoinedOn: "Oct 2021",
             ameneties: [
                "Pets Allowed",
                "Swimming Pool",
                "Wifi",
                "Kitchen",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "bacff3a0-87b2-449f-b604-067b12e1f34f",
            name: "Hotel 143",
            category: "Amazing Views",
            image: "https://source.unsplash.com/400x300/?hotel,room,95",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,51",
                "https://source.unsplash.com/400x300/?hotel,88",
                "https://source.unsplash.com/400x300/?hotel,72",
                "https://source.unsplash.com/400x300/?hotel,14"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 10473,
            rating: 3.54,
            numberOfBathrooms: 3,
            numberOfBeds: 1,
            numberOfguest: 6,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 16",
             hostJoinedOn: "Jul 2020",
             ameneties: [
                "Parking",
                "Kitchen",
                "Pets Allowed",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "3b1a7eb7-3cd9-461f-8091-e7438952a710",
            name: "Hotel 188",
            category: "Design",
            image: "https://source.unsplash.com/400x300/?hotel,room,42",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,37",
                "https://source.unsplash.com/400x300/?hotel,5",
                "https://source.unsplash.com/400x300/?hotel,84",
                "https://source.unsplash.com/400x300/?hotel,22"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 7356,
            rating: 3.54,
            numberOfBathrooms: 4,
            numberOfBeds: 4,
            numberOfguest: 7,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 18",
             hostJoinedOn: "Feb 2023",
             ameneties: [
                "Kitchen",
                "Wifi",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "2db9d8ed-4b2c-4a51-84b0-29ad7231fa8b",
            name: "Hotel 576",
            category: "National Parks",
            image: "https://source.unsplash.com/400x300/?hotel,room,53",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,92",
                "https://source.unsplash.com/400x300/?hotel,100",
                "https://source.unsplash.com/400x300/?hotel,66",
                "https://source.unsplash.com/400x300/?hotel,88"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 5142,
            rating: 4.06,
            numberOfBathrooms: 2,
            numberOfBeds: 2,
            numberOfguest: 4,
             numberOfBedrooms: 1,
             numberOfStudies: 2,
             hostName: "Host 4",
             hostJoinedOn: "Oct 2021",
             ameneties: [
                "Parking",
                "Swimming Pool",
                "Pets Allowed",
                "Kitchen"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "c05a716e-966a-465e-9fad-41a42bd648eb",
            name: "Hotel 922",
            category: "Shared Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,15",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,47",
                "https://source.unsplash.com/400x300/?hotel,47",
                "https://source.unsplash.com/400x300/?hotel,69",
                "https://source.unsplash.com/400x300/?hotel,60"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 14247,
            rating: 4.06,
            numberOfBathrooms: 1,
            numberOfBeds: 3,
            numberOfguest: 5,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 38",
             hostJoinedOn: "Nov 2021",
             ameneties: [
                "Wifi",
                "Kitchen",
                "Air Conditioning",
                "Parking",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "0993960e-0de7-4af9-b144-010430a434bc",
            name: "Hotel 968",
            category: "Earth Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,72",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,56",
                "https://source.unsplash.com/400x300/?hotel,57",
                "https://source.unsplash.com/400x300/?hotel,73",
                "https://source.unsplash.com/400x300/?hotel,52"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 15836,
            rating: 4.7,
            numberOfBathrooms: 3,
            numberOfBeds: 2,
            numberOfguest: 3,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 28",
             hostJoinedOn: "May 2015",
             ameneties: [
                "Pets Allowed",
                "Wifi"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "8191f8fa-f088-4292-a01b-3b0506ab0f94",
            name: "Hotel 545",
            category: "Iconic Sites",
            image: "https://source.unsplash.com/400x300/?hotel,room,15",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,71",
                "https://source.unsplash.com/400x300/?hotel,17",
                "https://source.unsplash.com/400x300/?hotel,16",
                "https://source.unsplash.com/400x300/?hotel,36"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 3171,
            rating: 4.13,
            numberOfBathrooms: 1,
            numberOfBeds: 3,
            numberOfguest: 7,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 11",
             hostJoinedOn: "Oct 2016",
             ameneties: [
                "Parking",
                "Kitchen",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "fc27a1d2-6155-405e-8a4e-c546de501d3c",
            name: "Hotel 985",
            category: "Cabins",
            image: "https://source.unsplash.com/400x300/?hotel,room,62",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,30",
                "https://source.unsplash.com/400x300/?hotel,87",
                "https://source.unsplash.com/400x300/?hotel,3",
                "https://source.unsplash.com/400x300/?hotel,31"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 8294,
            rating: 4.09,
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 5,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 2",
             hostJoinedOn: "Jun 2022",
             ameneties: [
                "Kitchen",
                "Pets Allowed",
                "Wifi",
                "Parking",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "beca26cd-2128-4a51-b1aa-5d966760d3c4",
            name: "Hotel 536",
            category: "Cabins",
            image: "https://source.unsplash.com/400x300/?hotel,room,63",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,67",
                "https://source.unsplash.com/400x300/?hotel,47",
                "https://source.unsplash.com/400x300/?hotel,39",
                "https://source.unsplash.com/400x300/?hotel,51"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 15194,
            rating: 4.52,
            numberOfBathrooms: 5,
            numberOfBeds: 1,
            numberOfguest: 8,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 2",
             hostJoinedOn: "Mar 2015",
             ameneties: [
                "Wifi",
                "Pets Allowed",
                "Parking",
                "Kitchen"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "78e9ac83-29a5-498b-825d-b9c45eeb2db0",
            name: "Hotel 171",
            category: "Cabins",
            image: "https://source.unsplash.com/400x300/?hotel,room,74",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,92",
                "https://source.unsplash.com/400x300/?hotel,33",
                "https://source.unsplash.com/400x300/?hotel,70",
                "https://source.unsplash.com/400x300/?hotel,78"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 13537,
            rating: 3.54,
            numberOfBathrooms: 1,
            numberOfBeds: 4,
            numberOfguest: 5,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 49",
             hostJoinedOn: "Jan 2023",
             ameneties: [
                "Swimming Pool",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "fa1f5c83-2b17-4826-8656-d8ff2afb0aaf",
            name: "Hotel 197",
            category: "Earth Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,13",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,4",
                "https://source.unsplash.com/400x300/?hotel,3",
                "https://source.unsplash.com/400x300/?hotel,75",
                "https://source.unsplash.com/400x300/?hotel,76"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 6222,
            rating: 4.36,
            numberOfBathrooms: 5,
            numberOfBeds: 3,
            numberOfguest: 6,
             numberOfBedrooms: 3,
             numberOfStudies: 2,
             hostName: "Host 49",
             hostJoinedOn: "Feb 2020",
             ameneties: [
                "Wifi",
                "Kitchen",
                "Pets Allowed",
                "Parking",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "0884edc7-7a71-4d97-8eb3-3ba43bf44974",
            name: "Hotel 712",
            category: "Castle",
            image: "https://source.unsplash.com/400x300/?hotel,room,93",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,91",
                "https://source.unsplash.com/400x300/?hotel,72",
                "https://source.unsplash.com/400x300/?hotel,34",
                "https://source.unsplash.com/400x300/?hotel,16"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 9501,
            rating: 3.81,
            numberOfBathrooms: 5,
            numberOfBeds: 2,
            numberOfguest: 8,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 45",
             hostJoinedOn: "May 2018",
             ameneties: [
                "Kitchen",
                "Pets Allowed",
                "Air Conditioning",
                "Parking",
                "Wifi"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "8eaa2155-ac6f-4b88-8de2-20385b097fab",
            name: "Hotel 779",
            category: "Historical Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,64",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,18",
                "https://source.unsplash.com/400x300/?hotel,13",
                "https://source.unsplash.com/400x300/?hotel,12",
                "https://source.unsplash.com/400x300/?hotel,92"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 10329,
            rating: 4.25,
            numberOfBathrooms: 5,
            numberOfBeds: 4,
            numberOfguest: 4,
             numberOfBedrooms: 2,
             numberOfStudies: 0,
             hostName: "Host 19",
             hostJoinedOn: "Mar 2019",
             ameneties: [
                "Pets Allowed",
                "Wifi",
                "Air Conditioning",
                "Parking",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "9ebfe621-c0d8-4c5d-9115-e5f1690e72e7",
            name: "Hotel 309",
            category: "A-frames",
            image: "https://source.unsplash.com/400x300/?hotel,room,9",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,65",
                "https://source.unsplash.com/400x300/?hotel,87",
                "https://source.unsplash.com/400x300/?hotel,18",
                "https://source.unsplash.com/400x300/?hotel,88"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 8685,
            rating: 3.65,
            numberOfBathrooms: 5,
            numberOfBeds: 4,
            numberOfguest: 1,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 10",
             hostJoinedOn: "Oct 2020",
             ameneties: [
                "Air Conditioning",
                "Kitchen",
                "Wifi",
                "Swimming Pool",
                "Parking"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "a4b806d2-464a-4f3f-86a9-afc8aeea3c75",
            name: "Hotel 230",
            category: "Golfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,78",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,66",
                "https://source.unsplash.com/400x300/?hotel,30",
                "https://source.unsplash.com/400x300/?hotel,98",
                "https://source.unsplash.com/400x300/?hotel,70"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 5510,
            rating: 4.75,
            numberOfBathrooms: 1,
            numberOfBeds: 3,
            numberOfguest: 8,
             numberOfBedrooms: 2,
             numberOfStudies: 0,
             hostName: "Host 25",
             hostJoinedOn: "Jun 2022",
             ameneties: [
                "Pets Allowed",
                "Parking"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "9d99dea7-4a24-499a-8fdc-0195821b65a1",
            name: "Hotel 989",
            category: "Surfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,52",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,36",
                "https://source.unsplash.com/400x300/?hotel,38",
                "https://source.unsplash.com/400x300/?hotel,99",
                "https://source.unsplash.com/400x300/?hotel,66"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 10898,
            rating: 3.9,
            numberOfBathrooms: 1,
            numberOfBeds: 1,
            numberOfguest: 1,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 14",
             hostJoinedOn: "Apr 2023",
             ameneties: [
                "Pets Allowed",
                "Wifi",
                "Air Conditioning",
                "Parking",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "4e00175d-8415-4e83-b267-eb388de562a0",
            name: "Hotel 718",
            category: "Luxe",
            image: "https://source.unsplash.com/400x300/?hotel,room,47",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,27",
                "https://source.unsplash.com/400x300/?hotel,52",
                "https://source.unsplash.com/400x300/?hotel,100",
                "https://source.unsplash.com/400x300/?hotel,91"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 9103,
            rating: 4.08,
            numberOfBathrooms: 1,
            numberOfBeds: 1,
            numberOfguest: 6,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 44",
             hostJoinedOn: "Jul 2019",
             ameneties: [
                "Kitchen",
                "Pets Allowed",
                "Swimming Pool",
                "Wifi",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "f5d4ecb0-33ab-46c9-8812-1260496c9f1f",
            name: "Hotel 851",
            category: "Surfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,82",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,70",
                "https://source.unsplash.com/400x300/?hotel,43",
                "https://source.unsplash.com/400x300/?hotel,7",
                "https://source.unsplash.com/400x300/?hotel,48"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 4335,
            rating: 4.2,
            numberOfBathrooms: 5,
            numberOfBeds: 3,
            numberOfguest: 4,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 9",
             hostJoinedOn: "Feb 2016",
             ameneties: [
                "Parking",
                "Swimming Pool",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "91c11d4c-41fb-4ce8-9e23-812681bdfebd",
            name: "Hotel 384",
            category: "Castle",
            image: "https://source.unsplash.com/400x300/?hotel,room,24",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,80",
                "https://source.unsplash.com/400x300/?hotel,79",
                "https://source.unsplash.com/400x300/?hotel,68",
                "https://source.unsplash.com/400x300/?hotel,54"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 14485,
            rating: 3.65,
            numberOfBathrooms: 2,
            numberOfBeds: 3,
            numberOfguest: 7,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 3",
             hostJoinedOn: "Apr 2016",
             ameneties: [
                "Pets Allowed",
                "Kitchen"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "3d0c6585-1ccd-4162-8aef-67330639b5af",
            name: "Hotel 709",
            category: "Campervans",
            image: "https://source.unsplash.com/400x300/?hotel,room,26",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,91",
                "https://source.unsplash.com/400x300/?hotel,17",
                "https://source.unsplash.com/400x300/?hotel,76",
                "https://source.unsplash.com/400x300/?hotel,43"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 7329,
            rating: 4.3,
            numberOfBathrooms: 4,
            numberOfBeds: 2,
            numberOfguest: 2,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 43",
             hostJoinedOn: "Oct 2021",
             ameneties: [
                "Swimming Pool",
                "Kitchen"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "1464e57c-59c1-4518-a398-30034257782d",
            name: "Hotel 150",
            category: "Caves",
            image: "https://source.unsplash.com/400x300/?hotel,room,25",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,17",
                "https://source.unsplash.com/400x300/?hotel,24",
                "https://source.unsplash.com/400x300/?hotel,57",
                "https://source.unsplash.com/400x300/?hotel,9"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 7162,
            rating: 4.67,
            numberOfBathrooms: 3,
            numberOfBeds: 2,
            numberOfguest: 6,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 44",
             hostJoinedOn: "Oct 2023",
             ameneties: [
                "Pets Allowed",
                "Kitchen",
                "Parking",
                "Swimming Pool",
                "Wifi"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "3bc4bce8-4367-4b5f-95a0-04ea96f73a14",
            name: "Hotel 892",
            category: "Caves",
            image: "https://source.unsplash.com/400x300/?hotel,room,5",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,6",
                "https://source.unsplash.com/400x300/?hotel,94",
                "https://source.unsplash.com/400x300/?hotel,23",
                "https://source.unsplash.com/400x300/?hotel,99"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 2726,
            rating: 4.1,
            numberOfBathrooms: 4,
            numberOfBeds: 1,
            numberOfguest: 8,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 2",
             hostJoinedOn: "Mar 2018",
             ameneties: [
                "Kitchen",
                "Wifi"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "9897b35d-955b-4a51-9b9f-f61b91da0451",
            name: "Hotel 305",
            category: "Treehouses",
            image: "https://source.unsplash.com/400x300/?hotel,room,13",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,84",
                "https://source.unsplash.com/400x300/?hotel,75",
                "https://source.unsplash.com/400x300/?hotel,73",
                "https://source.unsplash.com/400x300/?hotel,21"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 11005,
            rating: 3.87,
            numberOfBathrooms: 3,
            numberOfBeds: 1,
            numberOfguest: 4,
             numberOfBedrooms: 4,
             numberOfStudies: 2,
             hostName: "Host 50",
             hostJoinedOn: "Feb 2016",
             ameneties: [
                "Wifi",
                "Swimming Pool",
                "Pets Allowed",
                "Kitchen",
                "Parking"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "b32ff632-03d9-4cb2-94a1-619a86047ab3",
            name: "Hotel 225",
            category: "Tropical",
            image: "https://source.unsplash.com/400x300/?hotel,room,68",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,51",
                "https://source.unsplash.com/400x300/?hotel,78",
                "https://source.unsplash.com/400x300/?hotel,73",
                "https://source.unsplash.com/400x300/?hotel,59"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 17755,
            rating: 4.01,
            numberOfBathrooms: 1,
            numberOfBeds: 4,
            numberOfguest: 3,
             numberOfBedrooms: 3,
             numberOfStudies: 2,
             hostName: "Host 32",
             hostJoinedOn: "Feb 2018",
             ameneties: [
                "Swimming Pool",
                "Wifi",
                "Kitchen",
                "Air Conditioning",
                "Parking"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "3fba1299-b92d-4ea4-ada5-dc2c5daa5e03",
            name: "Hotel 375",
            category: "Campervans",
            image: "https://source.unsplash.com/400x300/?hotel,room,99",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,45",
                "https://source.unsplash.com/400x300/?hotel,20",
                "https://source.unsplash.com/400x300/?hotel,1",
                "https://source.unsplash.com/400x300/?hotel,42"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 13514,
            rating: 3.77,
            numberOfBathrooms: 2,
            numberOfBeds: 2,
            numberOfguest: 2,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 38",
             hostJoinedOn: "Nov 2021",
             ameneties: [
                "Swimming Pool",
                "Air Conditioning",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "734c256b-a6a6-48a0-96bf-c6c05c478c81",
            name: "Hotel 128",
            category: "Surfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,22",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,52",
                "https://source.unsplash.com/400x300/?hotel,13",
                "https://source.unsplash.com/400x300/?hotel,29",
                "https://source.unsplash.com/400x300/?hotel,59"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 6564,
            rating: 3.96,
            numberOfBathrooms: 4,
            numberOfBeds: 2,
            numberOfguest: 4,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 20",
             hostJoinedOn: "Apr 2023",
             ameneties: [
                "Swimming Pool",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "0b66f671-ddc6-47a7-b068-36125d07b7bf",
            name: "Hotel 965",
            category: "Island",
            image: "https://source.unsplash.com/400x300/?hotel,room,95",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,67",
                "https://source.unsplash.com/400x300/?hotel,99",
                "https://source.unsplash.com/400x300/?hotel,55",
                "https://source.unsplash.com/400x300/?hotel,14"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 16212,
            rating: 4.2,
            numberOfBathrooms: 1,
            numberOfBeds: 1,
            numberOfguest: 7,
             numberOfBedrooms: 3,
             numberOfStudies: 2,
             hostName: "Host 35",
             hostJoinedOn: "Feb 2023",
             ameneties: [
                "Pets Allowed",
                "Kitchen",
                "Air Conditioning",
                "Wifi",
                "Parking"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "4497d5bf-c495-4c5f-ac0d-1df85bd29cf8",
            name: "Hotel 438",
            category: "Historical Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,82",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,77",
                "https://source.unsplash.com/400x300/?hotel,74",
                "https://source.unsplash.com/400x300/?hotel,74",
                "https://source.unsplash.com/400x300/?hotel,95"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 8005,
            rating: 4.46,
            numberOfBathrooms: 2,
            numberOfBeds: 2,
            numberOfguest: 6,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 4",
             hostJoinedOn: "Apr 2023",
             ameneties: [
                "Wifi",
                "Air Conditioning",
                "Parking"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "ab5c0b0e-e75e-4e7e-ae39-1cb83e93589f",
            name: "Hotel 833",
            category: "Iconic Sites",
            image: "https://source.unsplash.com/400x300/?hotel,room,90",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,90",
                "https://source.unsplash.com/400x300/?hotel,59",
                "https://source.unsplash.com/400x300/?hotel,25",
                "https://source.unsplash.com/400x300/?hotel,19"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 8967,
            rating: 3.69,
            numberOfBathrooms: 5,
            numberOfBeds: 4,
            numberOfguest: 4,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 31",
             hostJoinedOn: "Jun 2018",
             ameneties: [
                "Kitchen",
                "Pets Allowed",
                "Parking",
                "Wifi",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "40ce069d-4919-4a32-9d81-b4b7451c7dfc",
            name: "Hotel 573",
            category: "A-frames",
            image: "https://source.unsplash.com/400x300/?hotel,room,55",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,44",
                "https://source.unsplash.com/400x300/?hotel,97",
                "https://source.unsplash.com/400x300/?hotel,34",
                "https://source.unsplash.com/400x300/?hotel,53"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 13633,
            rating: 4.24,
            numberOfBathrooms: 2,
            numberOfBeds: 2,
            numberOfguest: 1,
             numberOfBedrooms: 2,
             numberOfStudies: 2,
             hostName: "Host 6",
             hostJoinedOn: "Jul 2020",
             ameneties: [
                "Parking",
                "Swimming Pool",
                "Pets Allowed",
                "Air Conditioning",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "10cdda36-197b-4ec7-9a62-f09525e897a1",
            name: "Hotel 568",
            category: "Historical Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,66",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,52",
                "https://source.unsplash.com/400x300/?hotel,52",
                "https://source.unsplash.com/400x300/?hotel,27",
                "https://source.unsplash.com/400x300/?hotel,36"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 17027,
            rating: 4.06,
            numberOfBathrooms: 5,
            numberOfBeds: 3,
            numberOfguest: 2,
             numberOfBedrooms: 3,
             numberOfStudies: 1,
             hostName: "Host 12",
             hostJoinedOn: "Mar 2017",
             ameneties: [
                "Kitchen",
                "Parking",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "112e5fdc-c70f-4ff7-b94c-1a4254291a27",
            name: "Hotel 428",
            category: "Historical Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,56",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,94",
                "https://source.unsplash.com/400x300/?hotel,86",
                "https://source.unsplash.com/400x300/?hotel,15",
                "https://source.unsplash.com/400x300/?hotel,1"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 19969,
            rating: 4.6,
            numberOfBathrooms: 5,
            numberOfBeds: 4,
            numberOfguest: 1,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 39",
             hostJoinedOn: "Aug 2022",
             ameneties: [
                "Swimming Pool",
                "Air Conditioning",
                "Parking",
                "Kitchen",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "793f2427-5cbb-415e-923c-92803773994d",
            name: "Hotel 428",
            category: "Countryside",
            image: "https://source.unsplash.com/400x300/?hotel,room,91",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,34",
                "https://source.unsplash.com/400x300/?hotel,72",
                "https://source.unsplash.com/400x300/?hotel,62",
                "https://source.unsplash.com/400x300/?hotel,17"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 12461,
            rating: 3.7,
            numberOfBathrooms: 2,
            numberOfBeds: 3,
            numberOfguest: 2,
             numberOfBedrooms: 2,
             numberOfStudies: 0,
             hostName: "Host 41",
             hostJoinedOn: "Sep 2019",
             ameneties: [
                "Air Conditioning",
                "Parking",
                "Swimming Pool",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "3e97022b-8501-40ed-96d5-8d66602c9596",
            name: "Hotel 310",
            category: "Island",
            image: "https://source.unsplash.com/400x300/?hotel,room,43",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,58",
                "https://source.unsplash.com/400x300/?hotel,94",
                "https://source.unsplash.com/400x300/?hotel,28",
                "https://source.unsplash.com/400x300/?hotel,80"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 13796,
            rating: 4.85,
            numberOfBathrooms: 1,
            numberOfBeds: 2,
            numberOfguest: 3,
             numberOfBedrooms: 3,
             numberOfStudies: 2,
             hostName: "Host 48",
             hostJoinedOn: "Jul 2015",
             ameneties: [
                "Parking",
                "Air Conditioning",
                "Wifi",
                "Swimming Pool",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "ae914ac6-59e4-42ff-928e-85b4a1ad4017",
            name: "Hotel 797",
            category: "Island",
            image: "https://source.unsplash.com/400x300/?hotel,room,95",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,52",
                "https://source.unsplash.com/400x300/?hotel,53",
                "https://source.unsplash.com/400x300/?hotel,8",
                "https://source.unsplash.com/400x300/?hotel,14"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 14262,
            rating: 5.0,
            numberOfBathrooms: 1,
            numberOfBeds: 2,
            numberOfguest: 4,
             numberOfBedrooms: 3,
             numberOfStudies: 1,
             hostName: "Host 7",
             hostJoinedOn: "May 2022",
             ameneties: [
                "Air Conditioning",
                "Kitchen",
                "Parking",
                "Wifi"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "dea9a7ce-312e-49e0-a86d-aba7b09ff2da",
            name: "Hotel 389",
            category: "Countryside",
            image: "https://source.unsplash.com/400x300/?hotel,room,15",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,35",
                "https://source.unsplash.com/400x300/?hotel,61",
                "https://source.unsplash.com/400x300/?hotel,53",
                "https://source.unsplash.com/400x300/?hotel,93"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 5055,
            rating: 4.69,
            numberOfBathrooms: 1,
            numberOfBeds: 4,
            numberOfguest: 3,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 20",
             hostJoinedOn: "Aug 2022",
             ameneties: [
                "Swimming Pool",
                "Kitchen",
                "Air Conditioning",
                "Wifi",
                "Parking"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "05a4ff81-849d-4b52-b255-7af065f11c4e",
            name: "Hotel 216",
            category: "Golfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,5",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,17",
                "https://source.unsplash.com/400x300/?hotel,32",
                "https://source.unsplash.com/400x300/?hotel,55",
                "https://source.unsplash.com/400x300/?hotel,76"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 16702,
            rating: 3.77,
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 42",
             hostJoinedOn: "Oct 2015",
             ameneties: [
                "Kitchen",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "1b28771e-5155-4a0d-a6ab-a032f764cd37",
            name: "Hotel 303",
            category: "Caves",
            image: "https://source.unsplash.com/400x300/?hotel,room,16",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,68",
                "https://source.unsplash.com/400x300/?hotel,43",
                "https://source.unsplash.com/400x300/?hotel,39",
                "https://source.unsplash.com/400x300/?hotel,57"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 17793,
            rating: 3.64,
            numberOfBathrooms: 4,
            numberOfBeds: 3,
            numberOfguest: 1,
             numberOfBedrooms: 2,
             numberOfStudies: 0,
             hostName: "Host 47",
             hostJoinedOn: "Dec 2016",
             ameneties: [
                "Swimming Pool",
                "Parking",
                "Wifi"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "21e8d0d5-cfb8-46f1-a3c5-c9fa6741fc41",
            name: "Hotel 473",
            category: "Countryside",
            image: "https://source.unsplash.com/400x300/?hotel,room,73",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,86",
                "https://source.unsplash.com/400x300/?hotel,55",
                "https://source.unsplash.com/400x300/?hotel,23",
                "https://source.unsplash.com/400x300/?hotel,32"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 16269,
            rating: 4.14,
            numberOfBathrooms: 5,
            numberOfBeds: 4,
            numberOfguest: 7,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 33",
             hostJoinedOn: "Nov 2023",
             ameneties: [
                "Swimming Pool",
                "Parking"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "7b4bbf5e-9f64-4b52-96eb-d3efcd1e91ea",
            name: "Hotel 307",
            category: "Surfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,74",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,15",
                "https://source.unsplash.com/400x300/?hotel,29",
                "https://source.unsplash.com/400x300/?hotel,37",
                "https://source.unsplash.com/400x300/?hotel,23"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 8482,
            rating: 3.92,
            numberOfBathrooms: 1,
            numberOfBeds: 1,
            numberOfguest: 5,
             numberOfBedrooms: 3,
             numberOfStudies: 1,
             hostName: "Host 35",
             hostJoinedOn: "Apr 2023",
             ameneties: [
                "Pets Allowed",
                "Kitchen",
                "Parking"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "6d3f9de4-7bd0-4062-ac0c-fd03f0e31dfd",
            name: "Hotel 389",
            category: "Treehouses",
            image: "https://source.unsplash.com/400x300/?hotel,room,82",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,27",
                "https://source.unsplash.com/400x300/?hotel,48",
                "https://source.unsplash.com/400x300/?hotel,4",
                "https://source.unsplash.com/400x300/?hotel,57"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 19873,
            rating: 4.86,
            numberOfBathrooms: 4,
            numberOfBeds: 2,
            numberOfguest: 4,
             numberOfBedrooms: 2,
             numberOfStudies: 0,
             hostName: "Host 3",
             hostJoinedOn: "Feb 2016",
             ameneties: [
                "Pets Allowed",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "497281b8-8435-49d7-aaa1-0e2c2ad3adae",
            name: "Hotel 655",
            category: "Campervans",
            image: "https://source.unsplash.com/400x300/?hotel,room,32",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,76",
                "https://source.unsplash.com/400x300/?hotel,91",
                "https://source.unsplash.com/400x300/?hotel,16",
                "https://source.unsplash.com/400x300/?hotel,58"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 13084,
            rating: 4.21,
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 7,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 2",
             hostJoinedOn: "Feb 2020",
             ameneties: [
                "Kitchen",
                "Swimming Pool",
                "Pets Allowed",
                "Wifi"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "ac68db05-af84-4529-b7e2-eaa0968277dd",
            name: "Hotel 429",
            category: "Tropical",
            image: "https://source.unsplash.com/400x300/?hotel,room,25",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,58",
                "https://source.unsplash.com/400x300/?hotel,51",
                "https://source.unsplash.com/400x300/?hotel,22",
                "https://source.unsplash.com/400x300/?hotel,38"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 9531,
            rating: 4.04,
            numberOfBathrooms: 3,
            numberOfBeds: 2,
            numberOfguest: 1,
             numberOfBedrooms: 2,
             numberOfStudies: 2,
             hostName: "Host 29",
             hostJoinedOn: "Mar 2022",
             ameneties: [
                "Air Conditioning",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "9b52eebc-4ba9-47c8-90a8-e17a5bd41ef0",
            name: "Hotel 425",
            category: "Amazing Views",
            image: "https://source.unsplash.com/400x300/?hotel,room,45",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,44",
                "https://source.unsplash.com/400x300/?hotel,82",
                "https://source.unsplash.com/400x300/?hotel,9",
                "https://source.unsplash.com/400x300/?hotel,78"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 6910,
            rating: 4.37,
            numberOfBathrooms: 2,
            numberOfBeds: 4,
            numberOfguest: 5,
             numberOfBedrooms: 3,
             numberOfStudies: 1,
             hostName: "Host 12",
             hostJoinedOn: "Sep 2023",
             ameneties: [
                "Wifi",
                "Swimming Pool",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "e5963179-c4ce-4f06-a15e-e30ac7f4445c",
            name: "Hotel 574",
            category: "Tiny Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,36",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,91",
                "https://source.unsplash.com/400x300/?hotel,53",
                "https://source.unsplash.com/400x300/?hotel,18",
                "https://source.unsplash.com/400x300/?hotel,42"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 14043,
            rating: 3.94,
            numberOfBathrooms: 1,
            numberOfBeds: 4,
            numberOfguest: 3,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 12",
             hostJoinedOn: "Jul 2017",
             ameneties: [
                "Pets Allowed",
                "Parking",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "b7871ee7-c55c-447e-b189-56a75a85507a",
            name: "Hotel 253",
            category: "National Parks",
            image: "https://source.unsplash.com/400x300/?hotel,room,14",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,62",
                "https://source.unsplash.com/400x300/?hotel,64",
                "https://source.unsplash.com/400x300/?hotel,45",
                "https://source.unsplash.com/400x300/?hotel,68"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 13603,
            rating: 3.89,
            numberOfBathrooms: 5,
            numberOfBeds: 1,
            numberOfguest: 7,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 18",
             hostJoinedOn: "Sep 2023",
             ameneties: [
                "Wifi",
                "Swimming Pool",
                "Parking",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "7696a8c4-299c-4769-8b5b-95fa4a6f755f",
            name: "Hotel 782",
            category: "Luxe",
            image: "https://source.unsplash.com/400x300/?hotel,room,59",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,31",
                "https://source.unsplash.com/400x300/?hotel,78",
                "https://source.unsplash.com/400x300/?hotel,63",
                "https://source.unsplash.com/400x300/?hotel,88"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 2582,
            rating: 3.72,
            numberOfBathrooms: 2,
            numberOfBeds: 2,
            numberOfguest: 6,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 7",
             hostJoinedOn: "Dec 2020",
             ameneties: [
                "Kitchen",
                "Parking"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "af318c9d-0e10-41d5-885e-46c1d577773c",
            name: "Hotel 507",
            category: "Countryside",
            image: "https://source.unsplash.com/400x300/?hotel,room,93",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,96",
                "https://source.unsplash.com/400x300/?hotel,74",
                "https://source.unsplash.com/400x300/?hotel,20",
                "https://source.unsplash.com/400x300/?hotel,36"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 13907,
            rating: 3.79,
            numberOfBathrooms: 2,
            numberOfBeds: 2,
            numberOfguest: 5,
             numberOfBedrooms: 4,
             numberOfStudies: 2,
             hostName: "Host 31",
             hostJoinedOn: "Feb 2021",
             ameneties: [
                "Air Conditioning",
                "Kitchen",
                "Swimming Pool",
                "Parking",
                "Wifi"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "164cddc6-0c48-4196-b49d-b517f6febcb7",
            name: "Hotel 148",
            category: "Amazing Pools",
            image: "https://source.unsplash.com/400x300/?hotel,room,56",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,3",
                "https://source.unsplash.com/400x300/?hotel,83",
                "https://source.unsplash.com/400x300/?hotel,64",
                "https://source.unsplash.com/400x300/?hotel,96"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 5469,
            rating: 4.27,
            numberOfBathrooms: 5,
            numberOfBeds: 4,
            numberOfguest: 2,
             numberOfBedrooms: 1,
             numberOfStudies: 2,
             hostName: "Host 2",
             hostJoinedOn: "Apr 2019",
             ameneties: [
                "Air Conditioning",
                "Kitchen",
                "Parking",
                "Pets Allowed",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "30ce1c64-8d2a-4785-bc9e-18a49ded9177",
            name: "Hotel 752",
            category: "Shared Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,49",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,2",
                "https://source.unsplash.com/400x300/?hotel,46",
                "https://source.unsplash.com/400x300/?hotel,9",
                "https://source.unsplash.com/400x300/?hotel,4"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 14003,
            rating: 4.06,
            numberOfBathrooms: 2,
            numberOfBeds: 2,
            numberOfguest: 1,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 7",
             hostJoinedOn: "Feb 2016",
             ameneties: [
                "Parking",
                "Kitchen",
                "Wifi",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "b9f7d00d-0cf4-491f-bb3f-26dc5f11e58f",
            name: "Hotel 123",
            category: "Lakefront",
            image: "https://source.unsplash.com/400x300/?hotel,room,18",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,46",
                "https://source.unsplash.com/400x300/?hotel,9",
                "https://source.unsplash.com/400x300/?hotel,65",
                "https://source.unsplash.com/400x300/?hotel,72"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 6643,
            rating: 4.06,
            numberOfBathrooms: 4,
            numberOfBeds: 1,
            numberOfguest: 6,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 50",
             hostJoinedOn: "Jun 2016",
             ameneties: [
                "Kitchen",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "07a176a6-461f-49a0-9220-10b9ed56ec25",
            name: "Hotel 987",
            category: "Earth Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,22",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,64",
                "https://source.unsplash.com/400x300/?hotel,25",
                "https://source.unsplash.com/400x300/?hotel,87",
                "https://source.unsplash.com/400x300/?hotel,50"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 2583,
            rating: 3.57,
            numberOfBathrooms: 1,
            numberOfBeds: 4,
            numberOfguest: 7,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 47",
             hostJoinedOn: "Jan 2018",
             ameneties: [
                "Wifi",
                "Swimming Pool",
                "Pets Allowed",
                "Parking"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "b01c8e39-16ab-4db5-a036-7ead7933d5c6",
            name: "Hotel 162",
            category: "Iconic Sites",
            image: "https://source.unsplash.com/400x300/?hotel,room,77",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,23",
                "https://source.unsplash.com/400x300/?hotel,35",
                "https://source.unsplash.com/400x300/?hotel,28",
                "https://source.unsplash.com/400x300/?hotel,96"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 18548,
            rating: 4.17,
            numberOfBathrooms: 5,
            numberOfBeds: 1,
            numberOfguest: 5,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 17",
             hostJoinedOn: "Jul 2022",
             ameneties: [
                "Parking",
                "Air Conditioning",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "a3f59508-b157-4847-93b7-5e5ec02382a1",
            name: "Hotel 462",
            category: "Tropical",
            image: "https://source.unsplash.com/400x300/?hotel,room,47",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,97",
                "https://source.unsplash.com/400x300/?hotel,85",
                "https://source.unsplash.com/400x300/?hotel,60",
                "https://source.unsplash.com/400x300/?hotel,97"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 8791,
            rating: 4.8,
            numberOfBathrooms: 3,
            numberOfBeds: 1,
            numberOfguest: 3,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 45",
             hostJoinedOn: "Dec 2020",
             ameneties: [
                "Swimming Pool",
                "Parking",
                "Pets Allowed",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "d672c43e-8e12-4f8b-9844-65b4b0122a6c",
            name: "Hotel 368",
            category: "Caves",
            image: "https://source.unsplash.com/400x300/?hotel,room,38",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,50",
                "https://source.unsplash.com/400x300/?hotel,99",
                "https://source.unsplash.com/400x300/?hotel,44",
                "https://source.unsplash.com/400x300/?hotel,16"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 19663,
            rating: 4.18,
            numberOfBathrooms: 5,
            numberOfBeds: 4,
            numberOfguest: 2,
             numberOfBedrooms: 4,
             numberOfStudies: 2,
             hostName: "Host 21",
             hostJoinedOn: "Jun 2016",
             ameneties: [
                "Kitchen",
                "Parking",
                "Swimming Pool",
                "Pets Allowed",
                "Wifi"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "507f9937-a40f-4675-91f4-83f40e90681b",
            name: "Hotel 975",
            category: "Cabins",
            image: "https://source.unsplash.com/400x300/?hotel,room,84",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,8",
                "https://source.unsplash.com/400x300/?hotel,3",
                "https://source.unsplash.com/400x300/?hotel,85",
                "https://source.unsplash.com/400x300/?hotel,52"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 5362,
            rating: 3.6,
            numberOfBathrooms: 2,
            numberOfBeds: 3,
            numberOfguest: 1,
             numberOfBedrooms: 3,
             numberOfStudies: 2,
             hostName: "Host 21",
             hostJoinedOn: "Dec 2017",
             ameneties: [
                "Kitchen",
                "Air Conditioning",
                "Swimming Pool",
                "Wifi",
                "Parking"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "8518f78b-9844-4867-af22-4f91f36a5530",
            name: "Hotel 696",
            category: "Island",
            image: "https://source.unsplash.com/400x300/?hotel,room,50",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,54",
                "https://source.unsplash.com/400x300/?hotel,93",
                "https://source.unsplash.com/400x300/?hotel,22",
                "https://source.unsplash.com/400x300/?hotel,22"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 12234,
            rating: 3.62,
            numberOfBathrooms: 1,
            numberOfBeds: 2,
            numberOfguest: 1,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 19",
             hostJoinedOn: "Jun 2015",
             ameneties: [
                "Air Conditioning",
                "Parking",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "5e7ec184-e93f-45a9-bac1-8c0de8a31929",
            name: "Hotel 640",
            category: "Historical Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,94",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,86",
                "https://source.unsplash.com/400x300/?hotel,31",
                "https://source.unsplash.com/400x300/?hotel,84",
                "https://source.unsplash.com/400x300/?hotel,53"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 11719,
            rating: 3.93,
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 2,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 1",
             hostJoinedOn: "Sep 2015",
             ameneties: [
                "Swimming Pool",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "cc9dc53d-97f4-46cf-b660-11bfcc85918d",
            name: "Hotel 291",
            category: "Historical Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,33",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,79",
                "https://source.unsplash.com/400x300/?hotel,78",
                "https://source.unsplash.com/400x300/?hotel,82",
                "https://source.unsplash.com/400x300/?hotel,73"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 8397,
            rating: 4.14,
            numberOfBathrooms: 3,
            numberOfBeds: 1,
            numberOfguest: 7,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 37",
             hostJoinedOn: "Jan 2018",
             ameneties: [
                "Wifi",
                "Kitchen",
                "Parking"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "84eabef7-c81a-4aab-87ca-8dd2a0714dec",
            name: "Hotel 837",
            category: "Amazing Views",
            image: "https://source.unsplash.com/400x300/?hotel,room,54",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,50",
                "https://source.unsplash.com/400x300/?hotel,30",
                "https://source.unsplash.com/400x300/?hotel,88",
                "https://source.unsplash.com/400x300/?hotel,53"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 16290,
            rating: 4.69,
            numberOfBathrooms: 5,
            numberOfBeds: 1,
            numberOfguest: 8,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 17",
             hostJoinedOn: "Sep 2017",
             ameneties: [
                "Kitchen",
                "Parking",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "f2740404-ebc9-4e81-be16-1967ea4acbe1",
            name: "Hotel 971",
            category: "Surfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,61",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,44",
                "https://source.unsplash.com/400x300/?hotel,64",
                "https://source.unsplash.com/400x300/?hotel,51",
                "https://source.unsplash.com/400x300/?hotel,15"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 7437,
            rating: 3.96,
            numberOfBathrooms: 4,
            numberOfBeds: 3,
            numberOfguest: 6,
             numberOfBedrooms: 1,
             numberOfStudies: 2,
             hostName: "Host 48",
             hostJoinedOn: "Nov 2017",
             ameneties: [
                "Kitchen",
                "Pets Allowed",
                "Wifi",
                "Parking"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "d839ebd1-07d0-4fd2-bc09-ae7b6d64d0e8",
            name: "Hotel 616",
            category: "Tropical",
            image: "https://source.unsplash.com/400x300/?hotel,room,22",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,8",
                "https://source.unsplash.com/400x300/?hotel,24",
                "https://source.unsplash.com/400x300/?hotel,54",
                "https://source.unsplash.com/400x300/?hotel,38"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 9616,
            rating: 4.01,
            numberOfBathrooms: 4,
            numberOfBeds: 3,
            numberOfguest: 1,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 46",
             hostJoinedOn: "Oct 2015",
             ameneties: [
                "Air Conditioning",
                "Parking",
                "Pets Allowed",
                "Wifi"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "b95fdc9e-44ee-4269-9d40-33ebe3c528a6",
            name: "Hotel 399",
            category: "Historical Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,73",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,69",
                "https://source.unsplash.com/400x300/?hotel,36",
                "https://source.unsplash.com/400x300/?hotel,65",
                "https://source.unsplash.com/400x300/?hotel,46"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 12523,
            rating: 4.93,
            numberOfBathrooms: 4,
            numberOfBeds: 3,
            numberOfguest: 7,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 2",
             hostJoinedOn: "Jun 2022",
             ameneties: [
                "Air Conditioning",
                "Kitchen",
                "Wifi",
                "Pets Allowed",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "3d7d630d-b781-4a3f-ad9d-988984e791b6",
            name: "Hotel 679",
            category: "Treehouses",
            image: "https://source.unsplash.com/400x300/?hotel,room,55",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,21",
                "https://source.unsplash.com/400x300/?hotel,84",
                "https://source.unsplash.com/400x300/?hotel,81",
                "https://source.unsplash.com/400x300/?hotel,57"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 6849,
            rating: 4.35,
            numberOfBathrooms: 2,
            numberOfBeds: 2,
            numberOfguest: 7,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 8",
             hostJoinedOn: "Nov 2015",
             ameneties: [
                "Wifi",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "e52da2ac-5ed3-46ec-abb2-1584733bd058",
            name: "Hotel 413",
            category: "Treehouses",
            image: "https://source.unsplash.com/400x300/?hotel,room,63",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,76",
                "https://source.unsplash.com/400x300/?hotel,15",
                "https://source.unsplash.com/400x300/?hotel,88",
                "https://source.unsplash.com/400x300/?hotel,44"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 10414,
            rating: 3.51,
            numberOfBathrooms: 1,
            numberOfBeds: 3,
            numberOfguest: 1,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 47",
             hostJoinedOn: "Apr 2019",
             ameneties: [
                "Parking",
                "Wifi",
                "Pets Allowed",
                "Air Conditioning",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "a0b7a053-435c-4008-b678-826c8cfcb6fb",
            name: "Hotel 156",
            category: "Golfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,32",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,91",
                "https://source.unsplash.com/400x300/?hotel,58",
                "https://source.unsplash.com/400x300/?hotel,69",
                "https://source.unsplash.com/400x300/?hotel,98"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 3491,
            rating: 4.23,
            numberOfBathrooms: 4,
            numberOfBeds: 2,
            numberOfguest: 4,
             numberOfBedrooms: 4,
             numberOfStudies: 2,
             hostName: "Host 15",
             hostJoinedOn: "Feb 2018",
             ameneties: [
                "Wifi",
                "Air Conditioning",
                "Kitchen",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "e3893a5f-4570-461b-96a9-0619903fbda1",
            name: "Hotel 687",
            category: "Castle",
            image: "https://source.unsplash.com/400x300/?hotel,room,92",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,43",
                "https://source.unsplash.com/400x300/?hotel,34",
                "https://source.unsplash.com/400x300/?hotel,16",
                "https://source.unsplash.com/400x300/?hotel,28"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 11631,
            rating: 3.68,
            numberOfBathrooms: 3,
            numberOfBeds: 3,
            numberOfguest: 7,
             numberOfBedrooms: 2,
             numberOfStudies: 2,
             hostName: "Host 21",
             hostJoinedOn: "Feb 2016",
             ameneties: [
                "Wifi",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "a261c2b5-9c68-4313-9e16-1d78bd36cc9a",
            name: "Hotel 715",
            category: "Island",
            image: "https://source.unsplash.com/400x300/?hotel,room,17",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,69",
                "https://source.unsplash.com/400x300/?hotel,41",
                "https://source.unsplash.com/400x300/?hotel,28",
                "https://source.unsplash.com/400x300/?hotel,76"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 9363,
            rating: 3.62,
            numberOfBathrooms: 3,
            numberOfBeds: 2,
            numberOfguest: 4,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 27",
             hostJoinedOn: "Apr 2021",
             ameneties: [
                "Parking",
                "Wifi"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "32ea0d0f-8707-4b76-9d7f-2b38c7adfebd",
            name: "Hotel 762",
            category: "Tropical",
            image: "https://source.unsplash.com/400x300/?hotel,room,96",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,24",
                "https://source.unsplash.com/400x300/?hotel,59",
                "https://source.unsplash.com/400x300/?hotel,8",
                "https://source.unsplash.com/400x300/?hotel,14"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 5966,
            rating: 4.46,
            numberOfBathrooms: 5,
            numberOfBeds: 2,
            numberOfguest: 8,
             numberOfBedrooms: 1,
             numberOfStudies: 2,
             hostName: "Host 16",
             hostJoinedOn: "Feb 2016",
             ameneties: [
                "Kitchen",
                "Air Conditioning",
                "Swimming Pool",
                "Pets Allowed",
                "Wifi"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "875c8ca1-a408-436e-835c-db08fbdb521d",
            name: "Hotel 692",
            category: "Luxe",
            image: "https://source.unsplash.com/400x300/?hotel,room,33",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,9",
                "https://source.unsplash.com/400x300/?hotel,85",
                "https://source.unsplash.com/400x300/?hotel,36",
                "https://source.unsplash.com/400x300/?hotel,79"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 2840,
            rating: 3.84,
            numberOfBathrooms: 1,
            numberOfBeds: 3,
            numberOfguest: 6,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 25",
             hostJoinedOn: "Aug 2023",
             ameneties: [
                "Parking",
                "Air Conditioning",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "71a9a451-0e87-48dc-9746-953cb6157eed",
            name: "Hotel 936",
            category: "Cabins",
            image: "https://source.unsplash.com/400x300/?hotel,room,54",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,33",
                "https://source.unsplash.com/400x300/?hotel,41",
                "https://source.unsplash.com/400x300/?hotel,34",
                "https://source.unsplash.com/400x300/?hotel,86"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 15604,
            rating: 3.81,
            numberOfBathrooms: 2,
            numberOfBeds: 4,
            numberOfguest: 3,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 38",
             hostJoinedOn: "May 2016",
             ameneties: [
                "Wifi",
                "Parking",
                "Pets Allowed",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "d5fb1dcc-94c2-4603-b786-2734b442b96b",
            name: "Hotel 167",
            category: "Castle",
            image: "https://source.unsplash.com/400x300/?hotel,room,90",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,86",
                "https://source.unsplash.com/400x300/?hotel,65",
                "https://source.unsplash.com/400x300/?hotel,55",
                "https://source.unsplash.com/400x300/?hotel,56"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 2327,
            rating: 4.28,
            numberOfBathrooms: 3,
            numberOfBeds: 1,
            numberOfguest: 2,
             numberOfBedrooms: 2,
             numberOfStudies: 0,
             hostName: "Host 32",
             hostJoinedOn: "Jul 2020",
             ameneties: [
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "ce409b29-5111-45cb-aa69-22388f6caed8",
            name: "Hotel 264",
            category: "Iconic Sites",
            image: "https://source.unsplash.com/400x300/?hotel,room,83",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,60",
                "https://source.unsplash.com/400x300/?hotel,22",
                "https://source.unsplash.com/400x300/?hotel,15",
                "https://source.unsplash.com/400x300/?hotel,81"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 11782,
            rating: 3.77,
            numberOfBathrooms: 1,
            numberOfBeds: 3,
            numberOfguest: 7,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 34",
             hostJoinedOn: "Feb 2017",
             ameneties: [
                "Swimming Pool",
                "Wifi"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "74a8a804-7f7e-40e0-a476-3c16a9b8a2b8",
            name: "Hotel 772",
            category: "Campervans",
            image: "https://source.unsplash.com/400x300/?hotel,room,51",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,96",
                "https://source.unsplash.com/400x300/?hotel,8",
                "https://source.unsplash.com/400x300/?hotel,76",
                "https://source.unsplash.com/400x300/?hotel,16"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 9468,
            rating: 4.86,
            numberOfBathrooms: 1,
            numberOfBeds: 3,
            numberOfguest: 4,
             numberOfBedrooms: 3,
             numberOfStudies: 2,
             hostName: "Host 36",
             hostJoinedOn: "Oct 2017",
             ameneties: [
                "Parking",
                "Kitchen",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "571c9448-e0de-4b09-bd6c-e17d52c91c7a",
            name: "Hotel 573",
            category: "Cabins",
            image: "https://source.unsplash.com/400x300/?hotel,room,53",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,37",
                "https://source.unsplash.com/400x300/?hotel,21",
                "https://source.unsplash.com/400x300/?hotel,65",
                "https://source.unsplash.com/400x300/?hotel,98"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 14688,
            rating: 4.08,
            numberOfBathrooms: 4,
            numberOfBeds: 4,
            numberOfguest: 4,
             numberOfBedrooms: 3,
             numberOfStudies: 1,
             hostName: "Host 3",
             hostJoinedOn: "Jan 2022",
             ameneties: [
                "Wifi",
                "Swimming Pool",
                "Pets Allowed",
                "Kitchen"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "077a3082-1366-49c9-9593-e006af1cfe0d",
            name: "Hotel 742",
            category: "Treehouses",
            image: "https://source.unsplash.com/400x300/?hotel,room,17",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,46",
                "https://source.unsplash.com/400x300/?hotel,30",
                "https://source.unsplash.com/400x300/?hotel,56",
                "https://source.unsplash.com/400x300/?hotel,91"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 19705,
            rating: 3.8,
            numberOfBathrooms: 2,
            numberOfBeds: 4,
            numberOfguest: 6,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 50",
             hostJoinedOn: "Oct 2016",
             ameneties: [
                "Kitchen",
                "Swimming Pool",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "2e185fec-654c-4fb8-a9d3-583e1bdb6d33",
            name: "Hotel 959",
            category: "Iconic Sites",
            image: "https://source.unsplash.com/400x300/?hotel,room,7",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,74",
                "https://source.unsplash.com/400x300/?hotel,12",
                "https://source.unsplash.com/400x300/?hotel,27",
                "https://source.unsplash.com/400x300/?hotel,76"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 5917,
            rating: 3.63,
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
             numberOfBedrooms: 2,
             numberOfStudies: 0,
             hostName: "Host 34",
             hostJoinedOn: "Nov 2018",
             ameneties: [
                "Kitchen",
                "Parking",
                "Swimming Pool",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "608d47be-6476-4f9b-9cce-b3cbe2b2284e",
            name: "Hotel 916",
            category: "Cabins",
            image: "https://source.unsplash.com/400x300/?hotel,room,87",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,11",
                "https://source.unsplash.com/400x300/?hotel,14",
                "https://source.unsplash.com/400x300/?hotel,43",
                "https://source.unsplash.com/400x300/?hotel,78"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 12335,
            rating: 3.52,
            numberOfBathrooms: 5,
            numberOfBeds: 3,
            numberOfguest: 2,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 6",
             hostJoinedOn: "Aug 2017",
             ameneties: [
                "Wifi",
                "Pets Allowed",
                "Kitchen",
                "Swimming Pool",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "ba8fca51-9bab-451a-990d-5523f0225f25",
            name: "Hotel 312",
            category: "Luxe",
            image: "https://source.unsplash.com/400x300/?hotel,room,36",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,34",
                "https://source.unsplash.com/400x300/?hotel,52",
                "https://source.unsplash.com/400x300/?hotel,47",
                "https://source.unsplash.com/400x300/?hotel,12"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 12881,
            rating: 4.15,
            numberOfBathrooms: 4,
            numberOfBeds: 3,
            numberOfguest: 2,
             numberOfBedrooms: 3,
             numberOfStudies: 2,
             hostName: "Host 18",
             hostJoinedOn: "Mar 2019",
             ameneties: [
                "Wifi",
                "Swimming Pool",
                "Parking"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "b3e03692-ce3d-475b-a855-02b68c611d14",
            name: "Hotel 479",
            category: "Island",
            image: "https://source.unsplash.com/400x300/?hotel,room,14",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,24",
                "https://source.unsplash.com/400x300/?hotel,66",
                "https://source.unsplash.com/400x300/?hotel,48",
                "https://source.unsplash.com/400x300/?hotel,31"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 4578,
            rating: 4.86,
            numberOfBathrooms: 5,
            numberOfBeds: 3,
            numberOfguest: 8,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 3",
             hostJoinedOn: "Mar 2020",
             ameneties: [
                "Swimming Pool",
                "Parking",
                "Pets Allowed",
                "Wifi",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "e0a668c1-dac6-4010-9c0f-a3086c520e6c",
            name: "Hotel 980",
            category: "National Parks",
            image: "https://source.unsplash.com/400x300/?hotel,room,8",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,52",
                "https://source.unsplash.com/400x300/?hotel,37",
                "https://source.unsplash.com/400x300/?hotel,99",
                "https://source.unsplash.com/400x300/?hotel,54"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 7136,
            rating: 4.45,
            numberOfBathrooms: 4,
            numberOfBeds: 3,
            numberOfguest: 4,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 25",
             hostJoinedOn: "Jun 2018",
             ameneties: [
                "Swimming Pool",
                "Wifi"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "17674ce5-90cc-4daf-afaa-4246a552809a",
            name: "Hotel 586",
            category: "Shared Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,29",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,22",
                "https://source.unsplash.com/400x300/?hotel,11",
                "https://source.unsplash.com/400x300/?hotel,72",
                "https://source.unsplash.com/400x300/?hotel,14"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 17551,
            rating: 4.39,
            numberOfBathrooms: 3,
            numberOfBeds: 3,
            numberOfguest: 2,
             numberOfBedrooms: 3,
             numberOfStudies: 2,
             hostName: "Host 43",
             hostJoinedOn: "Nov 2016",
             ameneties: [
                "Parking",
                "Wifi"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "93ebd1fa-a2f8-45b3-9604-7b5eed085a65",
            name: "Hotel 299",
            category: "Lakefront",
            image: "https://source.unsplash.com/400x300/?hotel,room,54",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,99",
                "https://source.unsplash.com/400x300/?hotel,9",
                "https://source.unsplash.com/400x300/?hotel,18",
                "https://source.unsplash.com/400x300/?hotel,53"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 8149,
            rating: 4.05,
            numberOfBathrooms: 1,
            numberOfBeds: 2,
            numberOfguest: 6,
             numberOfBedrooms: 2,
             numberOfStudies: 2,
             hostName: "Host 18",
             hostJoinedOn: "Aug 2017",
             ameneties: [
                "Air Conditioning",
                "Pets Allowed",
                "Kitchen",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "68848653-3453-4a21-9d8d-9b5546617e67",
            name: "Hotel 673",
            category: "National Parks",
            image: "https://source.unsplash.com/400x300/?hotel,room,96",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,40",
                "https://source.unsplash.com/400x300/?hotel,55",
                "https://source.unsplash.com/400x300/?hotel,34",
                "https://source.unsplash.com/400x300/?hotel,21"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 3121,
            rating: 4.43,
            numberOfBathrooms: 5,
            numberOfBeds: 4,
            numberOfguest: 8,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 17",
             hostJoinedOn: "Jul 2015",
             ameneties: [
                "Air Conditioning",
                "Wifi",
                "Swimming Pool",
                "Parking",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "78a06cf3-2854-48c8-92ed-e25029cf08b6",
            name: "Hotel 359",
            category: "Lakefront",
            image: "https://source.unsplash.com/400x300/?hotel,room,48",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,88",
                "https://source.unsplash.com/400x300/?hotel,58",
                "https://source.unsplash.com/400x300/?hotel,82",
                "https://source.unsplash.com/400x300/?hotel,10"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 7057,
            rating: 4.12,
            numberOfBathrooms: 5,
            numberOfBeds: 2,
            numberOfguest: 1,
             numberOfBedrooms: 1,
             numberOfStudies: 2,
             hostName: "Host 4",
             hostJoinedOn: "Sep 2021",
             ameneties: [
                "Parking",
                "Air Conditioning",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "cf60a3f3-0248-42e8-9af0-3288c5e9c5fb",
            name: "Hotel 394",
            category: "Treehouses",
            image: "https://source.unsplash.com/400x300/?hotel,room,21",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,35",
                "https://source.unsplash.com/400x300/?hotel,81",
                "https://source.unsplash.com/400x300/?hotel,4",
                "https://source.unsplash.com/400x300/?hotel,4"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 9822,
            rating: 4.42,
            numberOfBathrooms: 5,
            numberOfBeds: 2,
            numberOfguest: 7,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 14",
             hostJoinedOn: "Jul 2018",
             ameneties: [
                "Air Conditioning",
                "Pets Allowed",
                "Kitchen",
                "Parking",
                "Wifi"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "fbf75b28-2ab4-4630-800b-fa0c27927d53",
            name: "Hotel 521",
            category: "Campervans",
            image: "https://source.unsplash.com/400x300/?hotel,room,73",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,78",
                "https://source.unsplash.com/400x300/?hotel,65",
                "https://source.unsplash.com/400x300/?hotel,64",
                "https://source.unsplash.com/400x300/?hotel,64"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 15436,
            rating: 4.06,
            numberOfBathrooms: 4,
            numberOfBeds: 3,
            numberOfguest: 7,
             numberOfBedrooms: 2,
             numberOfStudies: 0,
             hostName: "Host 33",
             hostJoinedOn: "Oct 2022",
             ameneties: [
                "Kitchen",
                "Parking",
                "Wifi",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "aa7c7bb9-4263-4b4a-91cb-01b326a858db",
            name: "Hotel 294",
            category: "Luxe",
            image: "https://source.unsplash.com/400x300/?hotel,room,9",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,74",
                "https://source.unsplash.com/400x300/?hotel,31",
                "https://source.unsplash.com/400x300/?hotel,42",
                "https://source.unsplash.com/400x300/?hotel,75"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 13550,
            rating: 4.54,
            numberOfBathrooms: 5,
            numberOfBeds: 2,
            numberOfguest: 2,
             numberOfBedrooms: 1,
             numberOfStudies: 2,
             hostName: "Host 26",
             hostJoinedOn: "Oct 2015",
             ameneties: [
                "Parking",
                "Swimming Pool",
                "Air Conditioning",
                "Wifi"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "fe987dd8-04a8-4826-a9d3-bcd8f441a91e",
            name: "Hotel 553",
            category: "National Parks",
            image: "https://source.unsplash.com/400x300/?hotel,room,75",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,68",
                "https://source.unsplash.com/400x300/?hotel,89",
                "https://source.unsplash.com/400x300/?hotel,80",
                "https://source.unsplash.com/400x300/?hotel,19"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 6476,
            rating: 4.61,
            numberOfBathrooms: 1,
            numberOfBeds: 4,
            numberOfguest: 1,
             numberOfBedrooms: 3,
             numberOfStudies: 1,
             hostName: "Host 38",
             hostJoinedOn: "Apr 2021",
             ameneties: [
                "Swimming Pool",
                "Parking",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "133c4a9c-40c4-4235-aaac-1aff71519c0c",
            name: "Hotel 507",
            category: "Bed & Breakfast",
            image: "https://source.unsplash.com/400x300/?hotel,room,31",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,26",
                "https://source.unsplash.com/400x300/?hotel,49",
                "https://source.unsplash.com/400x300/?hotel,19",
                "https://source.unsplash.com/400x300/?hotel,18"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 7601,
            rating: 4.34,
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 4,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 24",
             hostJoinedOn: "Dec 2021",
             ameneties: [
                "Pets Allowed",
                "Wifi",
                "Air Conditioning",
                "Kitchen",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "e7de0f0b-5210-4d7e-bfc6-28ce58031346",
            name: "Hotel 673",
            category: "National Parks",
            image: "https://source.unsplash.com/400x300/?hotel,room,24",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,89",
                "https://source.unsplash.com/400x300/?hotel,73",
                "https://source.unsplash.com/400x300/?hotel,46",
                "https://source.unsplash.com/400x300/?hotel,3"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 12680,
            rating: 4.44,
            numberOfBathrooms: 2,
            numberOfBeds: 3,
            numberOfguest: 1,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 36",
             hostJoinedOn: "Apr 2018",
             ameneties: [
                "Swimming Pool",
                "Parking",
                "Pets Allowed",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "71087857-49c2-443e-abd0-a02fe2a580a6",
            name: "Hotel 804",
            category: "Amazing Views",
            image: "https://source.unsplash.com/400x300/?hotel,room,96",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,76",
                "https://source.unsplash.com/400x300/?hotel,85",
                "https://source.unsplash.com/400x300/?hotel,27",
                "https://source.unsplash.com/400x300/?hotel,48"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 7178,
            rating: 3.76,
            numberOfBathrooms: 1,
            numberOfBeds: 2,
            numberOfguest: 4,
             numberOfBedrooms: 1,
             numberOfStudies: 2,
             hostName: "Host 3",
             hostJoinedOn: "Nov 2019",
             ameneties: [
                "Swimming Pool",
                "Wifi",
                "Kitchen"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "31ca30a4-f335-42d7-b666-9f8ffe9ec171",
            name: "Hotel 267",
            category: "Earth Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,18",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,98",
                "https://source.unsplash.com/400x300/?hotel,23",
                "https://source.unsplash.com/400x300/?hotel,41",
                "https://source.unsplash.com/400x300/?hotel,46"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 4635,
            rating: 3.56,
            numberOfBathrooms: 2,
            numberOfBeds: 4,
            numberOfguest: 3,
             numberOfBedrooms: 4,
             numberOfStudies: 2,
             hostName: "Host 21",
             hostJoinedOn: "Mar 2018",
             ameneties: [
                "Wifi",
                "Air Conditioning",
                "Pets Allowed",
                "Parking",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "9df20d30-8055-4eff-88fd-7252c2a1963a",
            name: "Hotel 715",
            category: "Caves",
            image: "https://source.unsplash.com/400x300/?hotel,room,49",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,4",
                "https://source.unsplash.com/400x300/?hotel,79",
                "https://source.unsplash.com/400x300/?hotel,17",
                "https://source.unsplash.com/400x300/?hotel,35"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 2118,
            rating: 3.9,
            numberOfBathrooms: 3,
            numberOfBeds: 3,
            numberOfguest: 3,
             numberOfBedrooms: 4,
             numberOfStudies: 2,
             hostName: "Host 17",
             hostJoinedOn: "Mar 2022",
             ameneties: [
                "Kitchen",
                "Swimming Pool",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "4fd58a17-5710-49a8-9071-9648f9de08f0",
            name: "Hotel 899",
            category: "Iconic Sites",
            image: "https://source.unsplash.com/400x300/?hotel,room,42",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,25",
                "https://source.unsplash.com/400x300/?hotel,42",
                "https://source.unsplash.com/400x300/?hotel,4",
                "https://source.unsplash.com/400x300/?hotel,81"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 14785,
            rating: 3.82,
            numberOfBathrooms: 5,
            numberOfBeds: 1,
            numberOfguest: 3,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 42",
             hostJoinedOn: "Jan 2018",
             ameneties: [
                "Pets Allowed",
                "Swimming Pool",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "4bdeed88-1cf9-4808-9cb5-7e252e2b08ff",
            name: "Hotel 603",
            category: "Design",
            image: "https://source.unsplash.com/400x300/?hotel,room,15",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,12",
                "https://source.unsplash.com/400x300/?hotel,75",
                "https://source.unsplash.com/400x300/?hotel,18",
                "https://source.unsplash.com/400x300/?hotel,53"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 4545,
            rating: 4.27,
            numberOfBathrooms: 4,
            numberOfBeds: 3,
            numberOfguest: 1,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 45",
             hostJoinedOn: "Apr 2019",
             ameneties: [
                "Parking",
                "Kitchen",
                "Air Conditioning",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "dcc569cd-d8b4-4393-beee-252a8bd174ad",
            name: "Hotel 789",
            category: "Luxe",
            image: "https://source.unsplash.com/400x300/?hotel,room,8",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,38",
                "https://source.unsplash.com/400x300/?hotel,4",
                "https://source.unsplash.com/400x300/?hotel,36",
                "https://source.unsplash.com/400x300/?hotel,92"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 13371,
            rating: 4.23,
            numberOfBathrooms: 5,
            numberOfBeds: 4,
            numberOfguest: 8,
             numberOfBedrooms: 3,
             numberOfStudies: 2,
             hostName: "Host 37",
             hostJoinedOn: "Sep 2018",
             ameneties: [
                "Air Conditioning",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "e0bdee17-155b-4c9e-a70a-bd1d8221d43b",
            name: "Hotel 602",
            category: "Tiny Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,2",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,56",
                "https://source.unsplash.com/400x300/?hotel,19",
                "https://source.unsplash.com/400x300/?hotel,56",
                "https://source.unsplash.com/400x300/?hotel,16"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 16261,
            rating: 4.1,
            numberOfBathrooms: 5,
            numberOfBeds: 1,
            numberOfguest: 5,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 13",
             hostJoinedOn: "Dec 2015",
             ameneties: [
                "Air Conditioning",
                "Wifi",
                "Swimming Pool",
                "Parking"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "e29f8944-62df-4315-b9c9-f67341cfa4e0",
            name: "Hotel 566",
            category: "Tropical",
            image: "https://source.unsplash.com/400x300/?hotel,room,4",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,21",
                "https://source.unsplash.com/400x300/?hotel,9",
                "https://source.unsplash.com/400x300/?hotel,29",
                "https://source.unsplash.com/400x300/?hotel,92"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 19606,
            rating: 3.57,
            numberOfBathrooms: 4,
            numberOfBeds: 4,
            numberOfguest: 2,
             numberOfBedrooms: 3,
             numberOfStudies: 1,
             hostName: "Host 7",
             hostJoinedOn: "Sep 2022",
             ameneties: [
                "Kitchen",
                "Air Conditioning",
                "Swimming Pool",
                "Parking",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "501a1ede-bfbb-40d6-96ba-bd54c227e3ee",
            name: "Hotel 111",
            category: "Caves",
            image: "https://source.unsplash.com/400x300/?hotel,room,34",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,32",
                "https://source.unsplash.com/400x300/?hotel,58",
                "https://source.unsplash.com/400x300/?hotel,69",
                "https://source.unsplash.com/400x300/?hotel,15"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 7500,
            rating: 4.27,
            numberOfBathrooms: 1,
            numberOfBeds: 4,
            numberOfguest: 8,
             numberOfBedrooms: 2,
             numberOfStudies: 2,
             hostName: "Host 41",
             hostJoinedOn: "Aug 2019",
             ameneties: [
                "Pets Allowed",
                "Kitchen",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "9c911067-acad-4d80-a023-c4c0e4b00a20",
            name: "Hotel 961",
            category: "Iconic Sites",
            image: "https://source.unsplash.com/400x300/?hotel,room,85",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,2",
                "https://source.unsplash.com/400x300/?hotel,2",
                "https://source.unsplash.com/400x300/?hotel,28",
                "https://source.unsplash.com/400x300/?hotel,6"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 16997,
            rating: 4.3,
            numberOfBathrooms: 2,
            numberOfBeds: 3,
            numberOfguest: 1,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 44",
             hostJoinedOn: "Oct 2020",
             ameneties: [
                "Swimming Pool",
                "Pets Allowed",
                "Parking",
                "Kitchen",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "eb20e187-780f-4184-a74a-24619f1cf4e2",
            name: "Hotel 186",
            category: "Campervans",
            image: "https://source.unsplash.com/400x300/?hotel,room,15",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,76",
                "https://source.unsplash.com/400x300/?hotel,58",
                "https://source.unsplash.com/400x300/?hotel,81",
                "https://source.unsplash.com/400x300/?hotel,22"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 17448,
            rating: 4.7,
            numberOfBathrooms: 3,
            numberOfBeds: 1,
            numberOfguest: 8,
             numberOfBedrooms: 1,
             numberOfStudies: 2,
             hostName: "Host 12",
             hostJoinedOn: "Dec 2020",
             ameneties: [
                "Wifi",
                "Pets Allowed",
                "Parking"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "8bc84fad-b62c-4733-a066-e0cc048da568",
            name: "Hotel 401",
            category: "Luxe",
            image: "https://source.unsplash.com/400x300/?hotel,room,7",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,22",
                "https://source.unsplash.com/400x300/?hotel,5",
                "https://source.unsplash.com/400x300/?hotel,75",
                "https://source.unsplash.com/400x300/?hotel,85"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 7897,
            rating: 4.66,
            numberOfBathrooms: 5,
            numberOfBeds: 2,
            numberOfguest: 4,
             numberOfBedrooms: 2,
             numberOfStudies: 2,
             hostName: "Host 31",
             hostJoinedOn: "Aug 2016",
             ameneties: [
                "Air Conditioning",
                "Wifi"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "718f0902-d7e0-4a9e-9982-8847cb533d48",
            name: "Hotel 689",
            category: "Luxe",
            image: "https://source.unsplash.com/400x300/?hotel,room,55",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,39",
                "https://source.unsplash.com/400x300/?hotel,98",
                "https://source.unsplash.com/400x300/?hotel,98",
                "https://source.unsplash.com/400x300/?hotel,10"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 15717,
            rating: 3.61,
            numberOfBathrooms: 1,
            numberOfBeds: 4,
            numberOfguest: 5,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 41",
             hostJoinedOn: "Jun 2022",
             ameneties: [
                "Wifi",
                "Swimming Pool",
                "Parking",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "3a4c765e-1943-46b8-b25e-f7d01f48717d",
            name: "Hotel 939",
            category: "A-frames",
            image: "https://source.unsplash.com/400x300/?hotel,room,22",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,79",
                "https://source.unsplash.com/400x300/?hotel,78",
                "https://source.unsplash.com/400x300/?hotel,61",
                "https://source.unsplash.com/400x300/?hotel,75"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 12155,
            rating: 4.37,
            numberOfBathrooms: 5,
            numberOfBeds: 2,
            numberOfguest: 7,
             numberOfBedrooms: 3,
             numberOfStudies: 1,
             hostName: "Host 15",
             hostJoinedOn: "Dec 2015",
             ameneties: [
                "Wifi",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "f29c7ca5-f619-490c-9465-ab918bf5b38a",
            name: "Hotel 395",
            category: "Earth Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,50",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,99",
                "https://source.unsplash.com/400x300/?hotel,24",
                "https://source.unsplash.com/400x300/?hotel,74",
                "https://source.unsplash.com/400x300/?hotel,23"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 9083,
            rating: 4.39,
            numberOfBathrooms: 1,
            numberOfBeds: 2,
            numberOfguest: 8,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 30",
             hostJoinedOn: "May 2021",
             ameneties: [
                "Kitchen",
                "Air Conditioning",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "17541df8-cebe-4d09-9a35-80fd2b050856",
            name: "Hotel 763",
            category: "Golfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,51",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,31",
                "https://source.unsplash.com/400x300/?hotel,73",
                "https://source.unsplash.com/400x300/?hotel,96",
                "https://source.unsplash.com/400x300/?hotel,71"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 19228,
            rating: 3.59,
            numberOfBathrooms: 2,
            numberOfBeds: 2,
            numberOfguest: 7,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 46",
             hostJoinedOn: "Nov 2020",
             ameneties: [
                "Air Conditioning",
                "Wifi"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "42abf5b8-f310-4f85-878c-73e047b69872",
            name: "Hotel 763",
            category: "Caves",
            image: "https://source.unsplash.com/400x300/?hotel,room,28",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,55",
                "https://source.unsplash.com/400x300/?hotel,32",
                "https://source.unsplash.com/400x300/?hotel,59",
                "https://source.unsplash.com/400x300/?hotel,62"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 9866,
            rating: 4.75,
            numberOfBathrooms: 1,
            numberOfBeds: 2,
            numberOfguest: 1,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 16",
             hostJoinedOn: "Nov 2021",
             ameneties: [
                "Wifi",
                "Air Conditioning",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "987ab5a9-4382-47ca-be46-8f4525d4cc81",
            name: "Hotel 895",
            category: "Castle",
            image: "https://source.unsplash.com/400x300/?hotel,room,91",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,95",
                "https://source.unsplash.com/400x300/?hotel,38",
                "https://source.unsplash.com/400x300/?hotel,99",
                "https://source.unsplash.com/400x300/?hotel,16"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 11373,
            rating: 4.84,
            numberOfBathrooms: 4,
            numberOfBeds: 3,
            numberOfguest: 3,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 43",
             hostJoinedOn: "Jul 2016",
             ameneties: [
                "Air Conditioning",
                "Swimming Pool",
                "Pets Allowed",
                "Parking"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "fad1cd3b-0025-4ce9-a10e-422a952ff10c",
            name: "Hotel 913",
            category: "Earth Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,51",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,3",
                "https://source.unsplash.com/400x300/?hotel,94",
                "https://source.unsplash.com/400x300/?hotel,65",
                "https://source.unsplash.com/400x300/?hotel,3"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 15111,
            rating: 4.05,
            numberOfBathrooms: 5,
            numberOfBeds: 3,
            numberOfguest: 4,
             numberOfBedrooms: 3,
             numberOfStudies: 2,
             hostName: "Host 24",
             hostJoinedOn: "Jul 2020",
             ameneties: [
                "Swimming Pool",
                "Wifi",
                "Parking",
                "Kitchen",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "96b13e7f-7ec7-47f3-aaba-8e14e617b2ea",
            name: "Hotel 857",
            category: "Bed & Breakfast",
            image: "https://source.unsplash.com/400x300/?hotel,room,56",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,78",
                "https://source.unsplash.com/400x300/?hotel,75",
                "https://source.unsplash.com/400x300/?hotel,84",
                "https://source.unsplash.com/400x300/?hotel,98"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 11128,
            rating: 4.95,
            numberOfBathrooms: 1,
            numberOfBeds: 1,
            numberOfguest: 4,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 40",
             hostJoinedOn: "Oct 2021",
             ameneties: [
                "Wifi",
                "Parking",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "b087ba3b-1ec8-4b90-931d-21161643bd38",
            name: "Hotel 417",
            category: "Tropical",
            image: "https://source.unsplash.com/400x300/?hotel,room,13",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,76",
                "https://source.unsplash.com/400x300/?hotel,46",
                "https://source.unsplash.com/400x300/?hotel,64",
                "https://source.unsplash.com/400x300/?hotel,75"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 14880,
            rating: 4.65,
            numberOfBathrooms: 4,
            numberOfBeds: 4,
            numberOfguest: 5,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 9",
             hostJoinedOn: "Dec 2019",
             ameneties: [
                "Parking",
                "Wifi",
                "Pets Allowed",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "29c6e2e8-01e0-4c10-8422-d8b63dc17bd2",
            name: "Hotel 646",
            category: "Lakefront",
            image: "https://source.unsplash.com/400x300/?hotel,room,90",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,57",
                "https://source.unsplash.com/400x300/?hotel,97",
                "https://source.unsplash.com/400x300/?hotel,28",
                "https://source.unsplash.com/400x300/?hotel,74"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 8882,
            rating: 3.78,
            numberOfBathrooms: 1,
            numberOfBeds: 2,
            numberOfguest: 4,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 31",
             hostJoinedOn: "Jun 2022",
             ameneties: [
                "Air Conditioning",
                "Kitchen"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "f800fe5b-7e16-47e5-b71c-b071ea2fae1f",
            name: "Hotel 186",
            category: "Luxe",
            image: "https://source.unsplash.com/400x300/?hotel,room,21",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,25",
                "https://source.unsplash.com/400x300/?hotel,75",
                "https://source.unsplash.com/400x300/?hotel,88",
                "https://source.unsplash.com/400x300/?hotel,36"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 6755,
            rating: 4.85,
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 7,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 17",
             hostJoinedOn: "May 2020",
             ameneties: [
                "Swimming Pool",
                "Parking",
                "Wifi",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "41a1685a-8bc2-451f-8238-2706874ff98a",
            name: "Hotel 970",
            category: "Countryside",
            image: "https://source.unsplash.com/400x300/?hotel,room,41",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,60",
                "https://source.unsplash.com/400x300/?hotel,65",
                "https://source.unsplash.com/400x300/?hotel,100",
                "https://source.unsplash.com/400x300/?hotel,46"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 3641,
            rating: 4.48,
            numberOfBathrooms: 5,
            numberOfBeds: 3,
            numberOfguest: 7,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 48",
             hostJoinedOn: "Aug 2017",
             ameneties: [
                "Swimming Pool",
                "Kitchen",
                "Parking",
                "Air Conditioning",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "4e3e7297-cedd-458b-b690-20f4616ffef6",
            name: "Hotel 537",
            category: "Cabins",
            image: "https://source.unsplash.com/400x300/?hotel,room,13",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,18",
                "https://source.unsplash.com/400x300/?hotel,6",
                "https://source.unsplash.com/400x300/?hotel,12",
                "https://source.unsplash.com/400x300/?hotel,28"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 6263,
            rating: 3.98,
            numberOfBathrooms: 2,
            numberOfBeds: 2,
            numberOfguest: 4,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 36",
             hostJoinedOn: "Mar 2018",
             ameneties: [
                "Wifi",
                "Pets Allowed",
                "Parking"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "ee6c3a83-620d-42d5-bfb4-820bbd441514",
            name: "Hotel 332",
            category: "Lakefront",
            image: "https://source.unsplash.com/400x300/?hotel,room,53",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,2",
                "https://source.unsplash.com/400x300/?hotel,63",
                "https://source.unsplash.com/400x300/?hotel,32",
                "https://source.unsplash.com/400x300/?hotel,78"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 13562,
            rating: 4.24,
            numberOfBathrooms: 4,
            numberOfBeds: 2,
            numberOfguest: 2,
             numberOfBedrooms: 3,
             numberOfStudies: 2,
             hostName: "Host 17",
             hostJoinedOn: "Jan 2018",
             ameneties: [
                "Swimming Pool",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "b45b7879-7b2d-48e6-9f5a-4406fe56ba4b",
            name: "Hotel 757",
            category: "Iconic Sites",
            image: "https://source.unsplash.com/400x300/?hotel,room,58",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,19",
                "https://source.unsplash.com/400x300/?hotel,55",
                "https://source.unsplash.com/400x300/?hotel,3",
                "https://source.unsplash.com/400x300/?hotel,46"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 14807,
            rating: 4.91,
            numberOfBathrooms: 5,
            numberOfBeds: 2,
            numberOfguest: 3,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 49",
             hostJoinedOn: "May 2021",
             ameneties: [
                "Wifi",
                "Air Conditioning",
                "Kitchen",
                "Parking"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "3dec2970-4ac2-4878-8bb4-3f3aa6783bb1",
            name: "Hotel 277",
            category: "Cabins",
            image: "https://source.unsplash.com/400x300/?hotel,room,23",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,92",
                "https://source.unsplash.com/400x300/?hotel,82",
                "https://source.unsplash.com/400x300/?hotel,48",
                "https://source.unsplash.com/400x300/?hotel,17"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 13967,
            rating: 3.87,
            numberOfBathrooms: 4,
            numberOfBeds: 1,
            numberOfguest: 5,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 27",
             hostJoinedOn: "Jul 2020",
             ameneties: [
                "Parking",
                "Swimming Pool",
                "Air Conditioning",
                "Wifi"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "bde1f00c-f67f-4d02-b613-2ab8f18a7ce5",
            name: "Hotel 875",
            category: "Shared Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,36",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,9",
                "https://source.unsplash.com/400x300/?hotel,80",
                "https://source.unsplash.com/400x300/?hotel,86",
                "https://source.unsplash.com/400x300/?hotel,25"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 2746,
            rating: 3.61,
            numberOfBathrooms: 5,
            numberOfBeds: 3,
            numberOfguest: 2,
             numberOfBedrooms: 3,
             numberOfStudies: 1,
             hostName: "Host 12",
             hostJoinedOn: "Jul 2021",
             ameneties: [
                "Air Conditioning",
                "Swimming Pool",
                "Pets Allowed",
                "Wifi",
                "Kitchen"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "420793ee-9f93-4f57-b706-829be5d193e4",
            name: "Hotel 545",
            category: "Golfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,6",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,16",
                "https://source.unsplash.com/400x300/?hotel,45",
                "https://source.unsplash.com/400x300/?hotel,33",
                "https://source.unsplash.com/400x300/?hotel,52"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 4334,
            rating: 3.61,
            numberOfBathrooms: 2,
            numberOfBeds: 2,
            numberOfguest: 2,
             numberOfBedrooms: 1,
             numberOfStudies: 2,
             hostName: "Host 38",
             hostJoinedOn: "Jan 2016",
             ameneties: [
                "Parking",
                "Kitchen"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "537e8f24-a5da-4faf-a0ec-171d741ac9ee",
            name: "Hotel 564",
            category: "Campervans",
            image: "https://source.unsplash.com/400x300/?hotel,room,93",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,42",
                "https://source.unsplash.com/400x300/?hotel,4",
                "https://source.unsplash.com/400x300/?hotel,18",
                "https://source.unsplash.com/400x300/?hotel,18"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 17505,
            rating: 4.44,
            numberOfBathrooms: 4,
            numberOfBeds: 2,
            numberOfguest: 4,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 14",
             hostJoinedOn: "Aug 2020",
             ameneties: [
                "Parking",
                "Air Conditioning",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "a3484537-3be8-4015-81c7-1b0b78c9b810",
            name: "Hotel 381",
            category: "Iconic Sites",
            image: "https://source.unsplash.com/400x300/?hotel,room,84",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,4",
                "https://source.unsplash.com/400x300/?hotel,90",
                "https://source.unsplash.com/400x300/?hotel,82",
                "https://source.unsplash.com/400x300/?hotel,71"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 13433,
            rating: 4.73,
            numberOfBathrooms: 3,
            numberOfBeds: 3,
            numberOfguest: 2,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 34",
             hostJoinedOn: "Jan 2023",
             ameneties: [
                "Parking",
                "Air Conditioning",
                "Kitchen",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "790341db-67be-492b-a9cb-cc19a1fc7e04",
            name: "Hotel 817",
            category: "Golfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,9",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,25",
                "https://source.unsplash.com/400x300/?hotel,99",
                "https://source.unsplash.com/400x300/?hotel,88",
                "https://source.unsplash.com/400x300/?hotel,62"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 19167,
            rating: 4.49,
            numberOfBathrooms: 2,
            numberOfBeds: 3,
            numberOfguest: 3,
             numberOfBedrooms: 3,
             numberOfStudies: 2,
             hostName: "Host 18",
             hostJoinedOn: "Apr 2016",
             ameneties: [
                "Wifi",
                "Pets Allowed",
                "Kitchen",
                "Parking"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "dcfdbf57-0ffd-4a1c-b80a-1af837fe16f8",
            name: "Hotel 539",
            category: "Caves",
            image: "https://source.unsplash.com/400x300/?hotel,room,12",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,75",
                "https://source.unsplash.com/400x300/?hotel,28",
                "https://source.unsplash.com/400x300/?hotel,98",
                "https://source.unsplash.com/400x300/?hotel,58"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 5960,
            rating: 4.38,
            numberOfBathrooms: 1,
            numberOfBeds: 3,
            numberOfguest: 2,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 42",
             hostJoinedOn: "Sep 2017",
             ameneties: [
                "Pets Allowed",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "1ab7a865-b2ad-4fc7-8a63-2a312ea4265e",
            name: "Hotel 494",
            category: "Castle",
            image: "https://source.unsplash.com/400x300/?hotel,room,54",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,20",
                "https://source.unsplash.com/400x300/?hotel,12",
                "https://source.unsplash.com/400x300/?hotel,31",
                "https://source.unsplash.com/400x300/?hotel,38"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 6500,
            rating: 4.23,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 8,
             numberOfBedrooms: 2,
             numberOfStudies: 2,
             hostName: "Host 27",
             hostJoinedOn: "Sep 2022",
             ameneties: [
                "Kitchen",
                "Wifi"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "0fcbfcf5-a758-4839-99c7-30d68c53461e",
            name: "Hotel 105",
            category: "A-frames",
            image: "https://source.unsplash.com/400x300/?hotel,room,83",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,26",
                "https://source.unsplash.com/400x300/?hotel,73",
                "https://source.unsplash.com/400x300/?hotel,85",
                "https://source.unsplash.com/400x300/?hotel,60"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 4152,
            rating: 4.0,
            numberOfBathrooms: 5,
            numberOfBeds: 1,
            numberOfguest: 5,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 46",
             hostJoinedOn: "Feb 2017",
             ameneties: [
                "Parking",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "2eeed80d-206c-48e4-8637-7784e05e66fc",
            name: "Hotel 453",
            category: "Caves",
            image: "https://source.unsplash.com/400x300/?hotel,room,66",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,100",
                "https://source.unsplash.com/400x300/?hotel,57",
                "https://source.unsplash.com/400x300/?hotel,60",
                "https://source.unsplash.com/400x300/?hotel,26"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 11799,
            rating: 4.11,
            numberOfBathrooms: 2,
            numberOfBeds: 3,
            numberOfguest: 7,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 46",
             hostJoinedOn: "Apr 2018",
             ameneties: [
                "Swimming Pool",
                "Air Conditioning",
                "Kitchen",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "ef17103c-d0ca-42b6-b384-40a2fbfdcd25",
            name: "Hotel 414",
            category: "Tropical",
            image: "https://source.unsplash.com/400x300/?hotel,room,45",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,71",
                "https://source.unsplash.com/400x300/?hotel,61",
                "https://source.unsplash.com/400x300/?hotel,37",
                "https://source.unsplash.com/400x300/?hotel,35"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 13260,
            rating: 4.33,
            numberOfBathrooms: 4,
            numberOfBeds: 3,
            numberOfguest: 2,
             numberOfBedrooms: 4,
             numberOfStudies: 2,
             hostName: "Host 22",
             hostJoinedOn: "Jan 2021",
             ameneties: [
                "Air Conditioning",
                "Wifi",
                "Parking"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "0eab815d-3805-4064-9533-bb6eeb12b0ac",
            name: "Hotel 224",
            category: "Surfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,17",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,65",
                "https://source.unsplash.com/400x300/?hotel,15",
                "https://source.unsplash.com/400x300/?hotel,72",
                "https://source.unsplash.com/400x300/?hotel,99"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 10563,
            rating: 4.42,
            numberOfBathrooms: 5,
            numberOfBeds: 4,
            numberOfguest: 5,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 7",
             hostJoinedOn: "Jul 2018",
             ameneties: [
                "Wifi",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "e8c78b34-556e-4ce7-8b07-f5321dee2de0",
            name: "Hotel 565",
            category: "Bed & Breakfast",
            image: "https://source.unsplash.com/400x300/?hotel,room,51",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,92",
                "https://source.unsplash.com/400x300/?hotel,7",
                "https://source.unsplash.com/400x300/?hotel,41",
                "https://source.unsplash.com/400x300/?hotel,39"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 14215,
            rating: 4.17,
            numberOfBathrooms: 1,
            numberOfBeds: 1,
            numberOfguest: 2,
             numberOfBedrooms: 4,
             numberOfStudies: 2,
             hostName: "Host 18",
             hostJoinedOn: "Jul 2022",
             ameneties: [
                "Swimming Pool",
                "Pets Allowed",
                "Wifi",
                "Kitchen"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "d8fd2a84-332f-46dc-aa25-8590cd804ad2",
            name: "Hotel 417",
            category: "Iconic Sites",
            image: "https://source.unsplash.com/400x300/?hotel,room,39",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,60",
                "https://source.unsplash.com/400x300/?hotel,51",
                "https://source.unsplash.com/400x300/?hotel,37",
                "https://source.unsplash.com/400x300/?hotel,52"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 9673,
            rating: 4.47,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 2,
             numberOfBedrooms: 4,
             numberOfStudies: 2,
             hostName: "Host 32",
             hostJoinedOn: "Jan 2018",
             ameneties: [
                "Pets Allowed",
                "Air Conditioning",
                "Wifi"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "1b2f0ae2-5706-490b-8c6e-7bfa2f9689e0",
            name: "Hotel 928",
            category: "Earth Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,23",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,42",
                "https://source.unsplash.com/400x300/?hotel,17",
                "https://source.unsplash.com/400x300/?hotel,35",
                "https://source.unsplash.com/400x300/?hotel,23"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 16062,
            rating: 4.25,
            numberOfBathrooms: 5,
            numberOfBeds: 1,
            numberOfguest: 5,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 35",
             hostJoinedOn: "Apr 2020",
             ameneties: [
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "61792213-7d77-4b4a-ac2e-7f18bbdcdb64",
            name: "Hotel 923",
            category: "National Parks",
            image: "https://source.unsplash.com/400x300/?hotel,room,80",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,4",
                "https://source.unsplash.com/400x300/?hotel,46",
                "https://source.unsplash.com/400x300/?hotel,83",
                "https://source.unsplash.com/400x300/?hotel,98"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 2177,
            rating: 4.55,
            numberOfBathrooms: 3,
            numberOfBeds: 2,
            numberOfguest: 4,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 33",
             hostJoinedOn: "Jun 2017",
             ameneties: [
                "Kitchen",
                "Wifi",
                "Parking",
                "Air Conditioning",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "2a4003e1-ec48-432e-bdc8-e3924a2a9a8f",
            name: "Hotel 782",
            category: "A-frames",
            image: "https://source.unsplash.com/400x300/?hotel,room,13",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,73",
                "https://source.unsplash.com/400x300/?hotel,60",
                "https://source.unsplash.com/400x300/?hotel,38",
                "https://source.unsplash.com/400x300/?hotel,56"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 4892,
            rating: 3.62,
            numberOfBathrooms: 1,
            numberOfBeds: 2,
            numberOfguest: 4,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 48",
             hostJoinedOn: "Jan 2019",
             ameneties: [
                "Swimming Pool",
                "Parking"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "d353a90d-eca3-40e3-b506-4dbf682f4a26",
            name: "Hotel 773",
            category: "Campervans",
            image: "https://source.unsplash.com/400x300/?hotel,room,99",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,90",
                "https://source.unsplash.com/400x300/?hotel,26",
                "https://source.unsplash.com/400x300/?hotel,44",
                "https://source.unsplash.com/400x300/?hotel,59"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 7237,
            rating: 3.74,
            numberOfBathrooms: 1,
            numberOfBeds: 2,
            numberOfguest: 8,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 26",
             hostJoinedOn: "May 2019",
             ameneties: [
                "Kitchen",
                "Parking",
                "Pets Allowed",
                "Swimming Pool",
                "Wifi"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "6967d8cd-00fb-4496-b63c-78689bbab6ae",
            name: "Hotel 877",
            category: "Luxe",
            image: "https://source.unsplash.com/400x300/?hotel,room,11",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,67",
                "https://source.unsplash.com/400x300/?hotel,61",
                "https://source.unsplash.com/400x300/?hotel,80",
                "https://source.unsplash.com/400x300/?hotel,3"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 16961,
            rating: 3.56,
            numberOfBathrooms: 3,
            numberOfBeds: 2,
            numberOfguest: 5,
             numberOfBedrooms: 2,
             numberOfStudies: 2,
             hostName: "Host 47",
             hostJoinedOn: "Mar 2015",
             ameneties: [
                "Air Conditioning",
                "Parking"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "76b3e0dc-3677-48c7-aab4-b9fa0113cbe5",
            name: "Hotel 417",
            category: "Iconic Sites",
            image: "https://source.unsplash.com/400x300/?hotel,room,55",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,76",
                "https://source.unsplash.com/400x300/?hotel,69",
                "https://source.unsplash.com/400x300/?hotel,69",
                "https://source.unsplash.com/400x300/?hotel,74"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 17885,
            rating: 3.78,
            numberOfBathrooms: 1,
            numberOfBeds: 4,
            numberOfguest: 3,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 26",
             hostJoinedOn: "Aug 2018",
             ameneties: [
                "Swimming Pool",
                "Pets Allowed",
                "Kitchen",
                "Parking"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "8c7a9bf7-4396-42dd-a632-c486efd8a4ca",
            name: "Hotel 653",
            category: "Tropical",
            image: "https://source.unsplash.com/400x300/?hotel,room,43",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,32",
                "https://source.unsplash.com/400x300/?hotel,51",
                "https://source.unsplash.com/400x300/?hotel,39",
                "https://source.unsplash.com/400x300/?hotel,94"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 10148,
            rating: 3.56,
            numberOfBathrooms: 3,
            numberOfBeds: 3,
            numberOfguest: 8,
             numberOfBedrooms: 1,
             numberOfStudies: 2,
             hostName: "Host 48",
             hostJoinedOn: "Apr 2015",
             ameneties: [
                "Wifi",
                "Kitchen",
                "Parking",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "2c4f0a09-e9c6-4b3d-82ac-793a580cc807",
            name: "Hotel 207",
            category: "Design",
            image: "https://source.unsplash.com/400x300/?hotel,room,59",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,43",
                "https://source.unsplash.com/400x300/?hotel,31",
                "https://source.unsplash.com/400x300/?hotel,91",
                "https://source.unsplash.com/400x300/?hotel,62"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 5454,
            rating: 3.86,
            numberOfBathrooms: 4,
            numberOfBeds: 2,
            numberOfguest: 8,
             numberOfBedrooms: 2,
             numberOfStudies: 2,
             hostName: "Host 2",
             hostJoinedOn: "Nov 2015",
             ameneties: [
                "Swimming Pool",
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "042b794a-0f49-4d17-b3f3-f10e881a2f59",
            name: "Hotel 178",
            category: "Lakefront",
            image: "https://source.unsplash.com/400x300/?hotel,room,50",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,66",
                "https://source.unsplash.com/400x300/?hotel,67",
                "https://source.unsplash.com/400x300/?hotel,12",
                "https://source.unsplash.com/400x300/?hotel,27"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 6540,
            rating: 4.8,
            numberOfBathrooms: 4,
            numberOfBeds: 4,
            numberOfguest: 6,
             numberOfBedrooms: 3,
             numberOfStudies: 1,
             hostName: "Host 2",
             hostJoinedOn: "May 2022",
             ameneties: [
                "Kitchen",
                "Swimming Pool",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "b8ce64da-c19c-41e4-b879-415c82178c90",
            name: "Hotel 548",
            category: "Iconic Sites",
            image: "https://source.unsplash.com/400x300/?hotel,room,51",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,88",
                "https://source.unsplash.com/400x300/?hotel,92",
                "https://source.unsplash.com/400x300/?hotel,88",
                "https://source.unsplash.com/400x300/?hotel,5"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 7649,
            rating: 4.62,
            numberOfBathrooms: 2,
            numberOfBeds: 4,
            numberOfguest: 3,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 7",
             hostJoinedOn: "Nov 2018",
             ameneties: [
                "Kitchen",
                "Wifi"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "ca894e68-6ff4-4646-9d0b-12494012dea6",
            name: "Hotel 411",
            category: "Tropical",
            image: "https://source.unsplash.com/400x300/?hotel,room,35",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,94",
                "https://source.unsplash.com/400x300/?hotel,16",
                "https://source.unsplash.com/400x300/?hotel,89",
                "https://source.unsplash.com/400x300/?hotel,73"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 12884,
            rating: 4.62,
            numberOfBathrooms: 2,
            numberOfBeds: 2,
            numberOfguest: 4,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 19",
             hostJoinedOn: "Mar 2021",
             ameneties: [
                "Kitchen",
                "Air Conditioning",
                "Pets Allowed",
                "Parking",
                "Wifi"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "bf6f1e09-174b-4893-b729-0589d7390a87",
            name: "Hotel 461",
            category: "Amazing Pools",
            image: "https://source.unsplash.com/400x300/?hotel,room,23",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,7",
                "https://source.unsplash.com/400x300/?hotel,47",
                "https://source.unsplash.com/400x300/?hotel,18",
                "https://source.unsplash.com/400x300/?hotel,56"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 8070,
            rating: 4.71,
            numberOfBathrooms: 1,
            numberOfBeds: 4,
            numberOfguest: 4,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 25",
             hostJoinedOn: "Jun 2019",
             ameneties: [
                "Kitchen",
                "Parking",
                "Wifi",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "76d542be-2b77-40cb-8eee-67c1c2cc1a81",
            name: "Hotel 144",
            category: "Golfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,44",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,63",
                "https://source.unsplash.com/400x300/?hotel,48",
                "https://source.unsplash.com/400x300/?hotel,16",
                "https://source.unsplash.com/400x300/?hotel,56"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 14459,
            rating: 4.46,
            numberOfBathrooms: 1,
            numberOfBeds: 1,
            numberOfguest: 1,
             numberOfBedrooms: 3,
             numberOfStudies: 1,
             hostName: "Host 43",
             hostJoinedOn: "Aug 2017",
             ameneties: [
                "Swimming Pool",
                "Kitchen",
                "Wifi",
                "Parking"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "9d34a2f5-acba-4b07-9dec-6268b4ac21fd",
            name: "Hotel 265",
            category: "Historical Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,52",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,34",
                "https://source.unsplash.com/400x300/?hotel,77",
                "https://source.unsplash.com/400x300/?hotel,67",
                "https://source.unsplash.com/400x300/?hotel,44"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 9368,
            rating: 3.78,
            numberOfBathrooms: 5,
            numberOfBeds: 1,
            numberOfguest: 5,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 33",
             hostJoinedOn: "Feb 2020",
             ameneties: [
                "Swimming Pool",
                "Wifi"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "005b3f93-12cc-4a12-8a19-87f198ea48a7",
            name: "Hotel 390",
            category: "Castle",
            image: "https://source.unsplash.com/400x300/?hotel,room,22",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,9",
                "https://source.unsplash.com/400x300/?hotel,41",
                "https://source.unsplash.com/400x300/?hotel,90",
                "https://source.unsplash.com/400x300/?hotel,78"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 12722,
            rating: 4.45,
            numberOfBathrooms: 1,
            numberOfBeds: 1,
            numberOfguest: 4,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 5",
             hostJoinedOn: "Feb 2018",
             ameneties: [
                "Parking",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "59121fd1-7e55-460a-9197-cc8ac1cb379e",
            name: "Hotel 600",
            category: "Campervans",
            image: "https://source.unsplash.com/400x300/?hotel,room,89",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,9",
                "https://source.unsplash.com/400x300/?hotel,27",
                "https://source.unsplash.com/400x300/?hotel,34",
                "https://source.unsplash.com/400x300/?hotel,83"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 18872,
            rating: 4.45,
            numberOfBathrooms: 2,
            numberOfBeds: 3,
            numberOfguest: 5,
             numberOfBedrooms: 2,
             numberOfStudies: 0,
             hostName: "Host 31",
             hostJoinedOn: "Dec 2016",
             ameneties: [
                "Air Conditioning",
                "Pets Allowed",
                "Wifi",
                "Swimming Pool",
                "Parking"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "6d3fa67e-6080-4a74-9f81-1c7e5799a27d",
            name: "Hotel 751",
            category: "Amazing Views",
            image: "https://source.unsplash.com/400x300/?hotel,room,22",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,45",
                "https://source.unsplash.com/400x300/?hotel,50",
                "https://source.unsplash.com/400x300/?hotel,26",
                "https://source.unsplash.com/400x300/?hotel,22"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 19330,
            rating: 3.62,
            numberOfBathrooms: 5,
            numberOfBeds: 3,
            numberOfguest: 4,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 18",
             hostJoinedOn: "Feb 2015",
             ameneties: [
                "Wifi",
                "Kitchen",
                "Parking"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "6c77156c-b33d-4c3d-bf0e-459fa9ed7a13",
            name: "Hotel 240",
            category: "Design",
            image: "https://source.unsplash.com/400x300/?hotel,room,90",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,28",
                "https://source.unsplash.com/400x300/?hotel,19",
                "https://source.unsplash.com/400x300/?hotel,11",
                "https://source.unsplash.com/400x300/?hotel,93"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 6038,
            rating: 3.89,
            numberOfBathrooms: 3,
            numberOfBeds: 2,
            numberOfguest: 8,
             numberOfBedrooms: 3,
             numberOfStudies: 2,
             hostName: "Host 41",
             hostJoinedOn: "Oct 2022",
             ameneties: [
                "Pets Allowed",
                "Wifi",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "1f54795d-81af-47a2-9bc8-1c0b3b9e89ad",
            name: "Hotel 603",
            category: "Earth Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,11",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,54",
                "https://source.unsplash.com/400x300/?hotel,94",
                "https://source.unsplash.com/400x300/?hotel,46",
                "https://source.unsplash.com/400x300/?hotel,67"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 11430,
            rating: 4.82,
            numberOfBathrooms: 3,
            numberOfBeds: 2,
            numberOfguest: 4,
             numberOfBedrooms: 3,
             numberOfStudies: 2,
             hostName: "Host 24",
             hostJoinedOn: "Nov 2017",
             ameneties: [
                "Kitchen",
                "Air Conditioning",
                "Swimming Pool",
                "Parking",
                "Wifi"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "6ea35aaa-2fe4-43e9-bee6-871336c200ce",
            name: "Hotel 709",
            category: "Farms",
            image: "https://source.unsplash.com/400x300/?hotel,room,88",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,51",
                "https://source.unsplash.com/400x300/?hotel,23",
                "https://source.unsplash.com/400x300/?hotel,69",
                "https://source.unsplash.com/400x300/?hotel,90"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 17478,
            rating: 3.96,
            numberOfBathrooms: 2,
            numberOfBeds: 4,
            numberOfguest: 8,
             numberOfBedrooms: 3,
             numberOfStudies: 1,
             hostName: "Host 14",
             hostJoinedOn: "Feb 2021",
             ameneties: [
                "Kitchen",
                "Swimming Pool",
                "Parking"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "f27ed8e8-e7c9-493f-8bad-d9e48ce66698",
            name: "Hotel 607",
            category: "National Parks",
            image: "https://source.unsplash.com/400x300/?hotel,room,69",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,26",
                "https://source.unsplash.com/400x300/?hotel,73",
                "https://source.unsplash.com/400x300/?hotel,47",
                "https://source.unsplash.com/400x300/?hotel,30"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 17165,
            rating: 3.64,
            numberOfBathrooms: 3,
            numberOfBeds: 2,
            numberOfguest: 2,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 48",
             hostJoinedOn: "Mar 2020",
             ameneties: [
                "Wifi",
                "Parking",
                "Kitchen",
                "Air Conditioning",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "acc5e6cd-e7ce-4d61-be23-ebb9e497356c",
            name: "Hotel 844",
            category: "Treehouses",
            image: "https://source.unsplash.com/400x300/?hotel,room,90",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,20",
                "https://source.unsplash.com/400x300/?hotel,13",
                "https://source.unsplash.com/400x300/?hotel,56",
                "https://source.unsplash.com/400x300/?hotel,70"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 12729,
            rating: 4.27,
            numberOfBathrooms: 5,
            numberOfBeds: 4,
            numberOfguest: 2,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 23",
             hostJoinedOn: "Apr 2018",
             ameneties: [
                "Wifi",
                "Parking",
                "Kitchen",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "070d92e1-92c2-4d47-a069-d146ce9c6de9",
            name: "Hotel 401",
            category: "Cabins",
            image: "https://source.unsplash.com/400x300/?hotel,room,35",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,6",
                "https://source.unsplash.com/400x300/?hotel,24",
                "https://source.unsplash.com/400x300/?hotel,87",
                "https://source.unsplash.com/400x300/?hotel,42"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 15267,
            rating: 3.94,
            numberOfBathrooms: 2,
            numberOfBeds: 4,
            numberOfguest: 8,
             numberOfBedrooms: 2,
             numberOfStudies: 0,
             hostName: "Host 20",
             hostJoinedOn: "Sep 2016",
             ameneties: [
                "Parking",
                "Pets Allowed",
                "Wifi",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "80ba93d8-ca80-4c68-bb75-16e6bcd1580b",
            name: "Hotel 675",
            category: "Island",
            image: "https://source.unsplash.com/400x300/?hotel,room,57",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,85",
                "https://source.unsplash.com/400x300/?hotel,76",
                "https://source.unsplash.com/400x300/?hotel,76",
                "https://source.unsplash.com/400x300/?hotel,60"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 6266,
            rating: 4.87,
            numberOfBathrooms: 1,
            numberOfBeds: 3,
            numberOfguest: 2,
             numberOfBedrooms: 3,
             numberOfStudies: 1,
             hostName: "Host 26",
             hostJoinedOn: "Mar 2017",
             ameneties: [
                "Kitchen",
                "Parking",
                "Air Conditioning",
                "Pets Allowed",
                "Wifi"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "c233a45c-a955-48e2-a6af-739616fb5c47",
            name: "Hotel 856",
            category: "Treehouses",
            image: "https://source.unsplash.com/400x300/?hotel,room,36",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,62",
                "https://source.unsplash.com/400x300/?hotel,60",
                "https://source.unsplash.com/400x300/?hotel,64",
                "https://source.unsplash.com/400x300/?hotel,82"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 11963,
            rating: 4.73,
            numberOfBathrooms: 4,
            numberOfBeds: 3,
            numberOfguest: 3,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 2",
             hostJoinedOn: "Mar 2018",
             ameneties: [
                "Pets Allowed",
                "Kitchen",
                "Swimming Pool",
                "Air Conditioning",
                "Parking"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "c1cd314a-3697-4900-bf57-5f8861ec7961",
            name: "Hotel 264",
            category: "Amazing Views",
            image: "https://source.unsplash.com/400x300/?hotel,room,39",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,49",
                "https://source.unsplash.com/400x300/?hotel,59",
                "https://source.unsplash.com/400x300/?hotel,95",
                "https://source.unsplash.com/400x300/?hotel,75"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 11833,
            rating: 4.73,
            numberOfBathrooms: 4,
            numberOfBeds: 1,
            numberOfguest: 4,
             numberOfBedrooms: 4,
             numberOfStudies: 2,
             hostName: "Host 15",
             hostJoinedOn: "Mar 2019",
             ameneties: [
                "Pets Allowed",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "8ab2962a-4deb-4ca1-ab5f-dab9aebd5ae2",
            name: "Hotel 887",
            category: "Iconic Sites",
            image: "https://source.unsplash.com/400x300/?hotel,room,42",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,6",
                "https://source.unsplash.com/400x300/?hotel,92",
                "https://source.unsplash.com/400x300/?hotel,49",
                "https://source.unsplash.com/400x300/?hotel,51"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 8080,
            rating: 3.62,
            numberOfBathrooms: 5,
            numberOfBeds: 1,
            numberOfguest: 2,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 36",
             hostJoinedOn: "Aug 2021",
             ameneties: [
                "Parking",
                "Pets Allowed",
                "Wifi"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "9976a838-76b3-4aec-96bc-3f8aabcf3f80",
            name: "Hotel 882",
            category: "Luxe",
            image: "https://source.unsplash.com/400x300/?hotel,room,58",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,74",
                "https://source.unsplash.com/400x300/?hotel,88",
                "https://source.unsplash.com/400x300/?hotel,94",
                "https://source.unsplash.com/400x300/?hotel,58"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 2996,
            rating: 4.89,
            numberOfBathrooms: 4,
            numberOfBeds: 2,
            numberOfguest: 1,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 48",
             hostJoinedOn: "Mar 2016",
             ameneties: [
                "Air Conditioning",
                "Parking",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "003c9f12-b629-48a1-a7da-a59213082884",
            name: "Hotel 603",
            category: "Tropical",
            image: "https://source.unsplash.com/400x300/?hotel,room,42",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,94",
                "https://source.unsplash.com/400x300/?hotel,1",
                "https://source.unsplash.com/400x300/?hotel,63",
                "https://source.unsplash.com/400x300/?hotel,78"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 10063,
            rating: 4.9,
            numberOfBathrooms: 5,
            numberOfBeds: 1,
            numberOfguest: 1,
             numberOfBedrooms: 1,
             numberOfStudies: 2,
             hostName: "Host 39",
             hostJoinedOn: "Aug 2016",
             ameneties: [
                "Air Conditioning",
                "Parking",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "92bc3824-59d4-48b7-a00d-4a133b6a0027",
            name: "Hotel 949",
            category: "Countryside",
            image: "https://source.unsplash.com/400x300/?hotel,room,41",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,57",
                "https://source.unsplash.com/400x300/?hotel,8",
                "https://source.unsplash.com/400x300/?hotel,48",
                "https://source.unsplash.com/400x300/?hotel,54"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 5121,
            rating: 4.48,
            numberOfBathrooms: 5,
            numberOfBeds: 1,
            numberOfguest: 8,
             numberOfBedrooms: 3,
             numberOfStudies: 1,
             hostName: "Host 23",
             hostJoinedOn: "Nov 2022",
             ameneties: [
                "Parking",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "8c7c325a-1a06-481c-aa8e-9d83df928e61",
            name: "Hotel 358",
            category: "Farms",
            image: "https://source.unsplash.com/400x300/?hotel,room,26",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,6",
                "https://source.unsplash.com/400x300/?hotel,93",
                "https://source.unsplash.com/400x300/?hotel,8",
                "https://source.unsplash.com/400x300/?hotel,45"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 7790,
            rating: 4.58,
            numberOfBathrooms: 1,
            numberOfBeds: 2,
            numberOfguest: 2,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 13",
             hostJoinedOn: "Jan 2023",
             ameneties: [
                "Kitchen",
                "Air Conditioning",
                "Parking",
                "Swimming Pool",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "1549707b-434c-4bd4-9327-8c3e6030d907",
            name: "Hotel 824",
            category: "Tiny Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,88",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,30",
                "https://source.unsplash.com/400x300/?hotel,60",
                "https://source.unsplash.com/400x300/?hotel,2",
                "https://source.unsplash.com/400x300/?hotel,25"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 18903,
            rating: 4.52,
            numberOfBathrooms: 5,
            numberOfBeds: 4,
            numberOfguest: 6,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 18",
             hostJoinedOn: "Feb 2018",
             ameneties: [
                "Pets Allowed",
                "Parking"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "dfb15912-04d3-45d5-8c1b-88f47fda87ff",
            name: "Hotel 876",
            category: "Caves",
            image: "https://source.unsplash.com/400x300/?hotel,room,44",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,94",
                "https://source.unsplash.com/400x300/?hotel,35",
                "https://source.unsplash.com/400x300/?hotel,14",
                "https://source.unsplash.com/400x300/?hotel,15"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 9824,
            rating: 4.78,
            numberOfBathrooms: 1,
            numberOfBeds: 3,
            numberOfguest: 3,
             numberOfBedrooms: 3,
             numberOfStudies: 2,
             hostName: "Host 8",
             hostJoinedOn: "Jun 2015",
             ameneties: [
                "Swimming Pool",
                "Wifi"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "44a5e25c-f08e-44e1-bd2f-8820b4571ed2",
            name: "Hotel 422",
            category: "Castle",
            image: "https://source.unsplash.com/400x300/?hotel,room,72",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,100",
                "https://source.unsplash.com/400x300/?hotel,85",
                "https://source.unsplash.com/400x300/?hotel,91",
                "https://source.unsplash.com/400x300/?hotel,70"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 4625,
            rating: 3.92,
            numberOfBathrooms: 3,
            numberOfBeds: 3,
            numberOfguest: 7,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 12",
             hostJoinedOn: "Sep 2021",
             ameneties: [
                "Wifi",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "f4737433-d7f8-4dea-a3cf-eac7b0ee3504",
            name: "Hotel 818",
            category: "A-frames",
            image: "https://source.unsplash.com/400x300/?hotel,room,43",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,73",
                "https://source.unsplash.com/400x300/?hotel,46",
                "https://source.unsplash.com/400x300/?hotel,58",
                "https://source.unsplash.com/400x300/?hotel,28"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 17981,
            rating: 3.6,
            numberOfBathrooms: 2,
            numberOfBeds: 4,
            numberOfguest: 5,
             numberOfBedrooms: 3,
             numberOfStudies: 1,
             hostName: "Host 33",
             hostJoinedOn: "Jul 2020",
             ameneties: [
                "Air Conditioning",
                "Parking",
                "Pets Allowed",
                "Kitchen",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "1dc61974-39a3-486e-bc6b-d88bd84009fb",
            name: "Hotel 740",
            category: "Island",
            image: "https://source.unsplash.com/400x300/?hotel,room,35",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,19",
                "https://source.unsplash.com/400x300/?hotel,72",
                "https://source.unsplash.com/400x300/?hotel,91",
                "https://source.unsplash.com/400x300/?hotel,7"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 8753,
            rating: 3.96,
            numberOfBathrooms: 3,
            numberOfBeds: 2,
            numberOfguest: 6,
             numberOfBedrooms: 3,
             numberOfStudies: 1,
             hostName: "Host 36",
             hostJoinedOn: "Jan 2021",
             ameneties: [
                "Parking",
                "Pets Allowed",
                "Swimming Pool",
                "Wifi",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "31bf22c8-c80a-45e4-a483-05a79178f382",
            name: "Hotel 762",
            category: "Amazing Pools",
            image: "https://source.unsplash.com/400x300/?hotel,room,31",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,51",
                "https://source.unsplash.com/400x300/?hotel,83",
                "https://source.unsplash.com/400x300/?hotel,8",
                "https://source.unsplash.com/400x300/?hotel,37"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 6068,
            rating: 4.63,
            numberOfBathrooms: 3,
            numberOfBeds: 1,
            numberOfguest: 5,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 8",
             hostJoinedOn: "Feb 2021",
             ameneties: [
                "Kitchen",
                "Air Conditioning",
                "Swimming Pool",
                "Wifi"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "d9e057c5-58c6-46ee-8107-0909ef7af592",
            name: "Hotel 687",
            category: "Golfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,84",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,50",
                "https://source.unsplash.com/400x300/?hotel,14",
                "https://source.unsplash.com/400x300/?hotel,27",
                "https://source.unsplash.com/400x300/?hotel,91"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 9138,
            rating: 4.57,
            numberOfBathrooms: 3,
            numberOfBeds: 2,
            numberOfguest: 2,
             numberOfBedrooms: 2,
             numberOfStudies: 0,
             hostName: "Host 19",
             hostJoinedOn: "Oct 2021",
             ameneties: [
                "Swimming Pool",
                "Air Conditioning",
                "Pets Allowed",
                "Parking"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "8a99db3f-e9f7-412e-bbdb-4ffb3c8de12d",
            name: "Hotel 496",
            category: "Shared Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,72",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,23",
                "https://source.unsplash.com/400x300/?hotel,43",
                "https://source.unsplash.com/400x300/?hotel,20",
                "https://source.unsplash.com/400x300/?hotel,19"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 13329,
            rating: 3.77,
            numberOfBathrooms: 2,
            numberOfBeds: 2,
            numberOfguest: 8,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 14",
             hostJoinedOn: "Jun 2022",
             ameneties: [
                "Swimming Pool",
                "Parking"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "45f615df-9610-43e9-af9a-ec2fdc94c152",
            name: "Hotel 907",
            category: "Treehouses",
            image: "https://source.unsplash.com/400x300/?hotel,room,20",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,49",
                "https://source.unsplash.com/400x300/?hotel,44",
                "https://source.unsplash.com/400x300/?hotel,39",
                "https://source.unsplash.com/400x300/?hotel,65"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 5136,
            rating: 4.07,
            numberOfBathrooms: 2,
            numberOfBeds: 2,
            numberOfguest: 8,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 13",
             hostJoinedOn: "Jun 2018",
             ameneties: [
                "Swimming Pool",
                "Pets Allowed",
                "Wifi"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "9f03a18a-8150-4530-a9b6-362a362b9fdc",
            name: "Hotel 237",
            category: "Bed & Breakfast",
            image: "https://source.unsplash.com/400x300/?hotel,room,70",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,89",
                "https://source.unsplash.com/400x300/?hotel,57",
                "https://source.unsplash.com/400x300/?hotel,97",
                "https://source.unsplash.com/400x300/?hotel,96"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 7558,
            rating: 3.79,
            numberOfBathrooms: 5,
            numberOfBeds: 2,
            numberOfguest: 8,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 32",
             hostJoinedOn: "Jun 2022",
             ameneties: [
                "Swimming Pool",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "81085aca-2a7e-462a-993d-93078664df9f",
            name: "Hotel 128",
            category: "Lakefront",
            image: "https://source.unsplash.com/400x300/?hotel,room,59",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,49",
                "https://source.unsplash.com/400x300/?hotel,50",
                "https://source.unsplash.com/400x300/?hotel,32",
                "https://source.unsplash.com/400x300/?hotel,72"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 19506,
            rating: 3.71,
            numberOfBathrooms: 5,
            numberOfBeds: 1,
            numberOfguest: 2,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 38",
             hostJoinedOn: "Nov 2018",
             ameneties: [
                "Kitchen",
                "Parking",
                "Wifi"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "8a2c60b2-4643-4c86-b02f-29dd7cea465f",
            name: "Hotel 333",
            category: "Design",
            image: "https://source.unsplash.com/400x300/?hotel,room,42",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,23",
                "https://source.unsplash.com/400x300/?hotel,10",
                "https://source.unsplash.com/400x300/?hotel,60",
                "https://source.unsplash.com/400x300/?hotel,87"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 12408,
            rating: 3.88,
            numberOfBathrooms: 1,
            numberOfBeds: 4,
            numberOfguest: 3,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 2",
             hostJoinedOn: "Aug 2019",
             ameneties: [
                "Pets Allowed",
                "Air Conditioning",
                "Swimming Pool",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "414dc4b4-49f6-4e0a-8621-29fc990f4f1b",
            name: "Hotel 419",
            category: "Historical Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,11",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,26",
                "https://source.unsplash.com/400x300/?hotel,35",
                "https://source.unsplash.com/400x300/?hotel,11",
                "https://source.unsplash.com/400x300/?hotel,99"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 10245,
            rating: 3.82,
            numberOfBathrooms: 5,
            numberOfBeds: 3,
            numberOfguest: 7,
             numberOfBedrooms: 2,
             numberOfStudies: 0,
             hostName: "Host 20",
             hostJoinedOn: "Sep 2016",
             ameneties: [
                "Kitchen",
                "Parking"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "c3c3a71a-ff99-40a6-8554-433a072b4639",
            name: "Hotel 393",
            category: "A-frames",
            image: "https://source.unsplash.com/400x300/?hotel,room,57",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,73",
                "https://source.unsplash.com/400x300/?hotel,100",
                "https://source.unsplash.com/400x300/?hotel,51",
                "https://source.unsplash.com/400x300/?hotel,38"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 16177,
            rating: 3.71,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 7,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 45",
             hostJoinedOn: "Oct 2021",
             ameneties: [
                "Swimming Pool",
                "Wifi",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "4a98c501-9e98-4f4d-a575-047730f8f361",
            name: "Hotel 448",
            category: "Castle",
            image: "https://source.unsplash.com/400x300/?hotel,room,57",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,21",
                "https://source.unsplash.com/400x300/?hotel,50",
                "https://source.unsplash.com/400x300/?hotel,85",
                "https://source.unsplash.com/400x300/?hotel,40"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 13689,
            rating: 4.95,
            numberOfBathrooms: 4,
            numberOfBeds: 1,
            numberOfguest: 1,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 1",
             hostJoinedOn: "Sep 2017",
             ameneties: [
                "Parking",
                "Kitchen",
                "Wifi",
                "Air Conditioning",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "bb8f8677-90a6-4797-a26e-3e4bcce102e1",
            name: "Hotel 114",
            category: "Luxe",
            image: "https://source.unsplash.com/400x300/?hotel,room,56",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,55",
                "https://source.unsplash.com/400x300/?hotel,19",
                "https://source.unsplash.com/400x300/?hotel,56",
                "https://source.unsplash.com/400x300/?hotel,64"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 6707,
            rating: 4.63,
            numberOfBathrooms: 4,
            numberOfBeds: 3,
            numberOfguest: 7,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 15",
             hostJoinedOn: "Oct 2015",
             ameneties: [
                "Air Conditioning",
                "Kitchen",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "65a8efc1-5ebe-4b46-b01e-4bc03bef8700",
            name: "Hotel 793",
            category: "Tiny Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,56",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,15",
                "https://source.unsplash.com/400x300/?hotel,29",
                "https://source.unsplash.com/400x300/?hotel,42",
                "https://source.unsplash.com/400x300/?hotel,16"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 10455,
            rating: 4.57,
            numberOfBathrooms: 2,
            numberOfBeds: 3,
            numberOfguest: 6,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 39",
             hostJoinedOn: "Oct 2017",
             ameneties: [
                "Swimming Pool",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "9a7345ec-7b04-49bf-833e-19fb1196f644",
            name: "Hotel 235",
            category: "Cabins",
            image: "https://source.unsplash.com/400x300/?hotel,room,96",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,12",
                "https://source.unsplash.com/400x300/?hotel,62",
                "https://source.unsplash.com/400x300/?hotel,36",
                "https://source.unsplash.com/400x300/?hotel,20"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 9988,
            rating: 3.51,
            numberOfBathrooms: 2,
            numberOfBeds: 3,
            numberOfguest: 2,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 23",
             hostJoinedOn: "Jun 2020",
             ameneties: [
                "Air Conditioning",
                "Wifi",
                "Parking",
                "Pets Allowed",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "699f0ef3-03ec-4954-bd5a-2c6e5882e7a7",
            name: "Hotel 469",
            category: "Golfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,31",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,73",
                "https://source.unsplash.com/400x300/?hotel,44",
                "https://source.unsplash.com/400x300/?hotel,39",
                "https://source.unsplash.com/400x300/?hotel,72"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 3862,
            rating: 3.73,
            numberOfBathrooms: 5,
            numberOfBeds: 2,
            numberOfguest: 4,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 32",
             hostJoinedOn: "May 2015",
             ameneties: [
                "Kitchen",
                "Parking",
                "Swimming Pool",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "0702d620-fac9-4994-aab3-d81df4bb0554",
            name: "Hotel 997",
            category: "Surfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,13",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,87",
                "https://source.unsplash.com/400x300/?hotel,28",
                "https://source.unsplash.com/400x300/?hotel,76",
                "https://source.unsplash.com/400x300/?hotel,27"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 10732,
            rating: 4.34,
            numberOfBathrooms: 5,
            numberOfBeds: 4,
            numberOfguest: 3,
             numberOfBedrooms: 3,
             numberOfStudies: 1,
             hostName: "Host 49",
             hostJoinedOn: "Mar 2019",
             ameneties: [
                "Wifi",
                "Pets Allowed",
                "Air Conditioning",
                "Kitchen",
                "Parking"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "db272e0c-9a0f-4b16-8016-d5fa53173524",
            name: "Hotel 320",
            category: "Tropical",
            image: "https://source.unsplash.com/400x300/?hotel,room,1",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,47",
                "https://source.unsplash.com/400x300/?hotel,6",
                "https://source.unsplash.com/400x300/?hotel,23",
                "https://source.unsplash.com/400x300/?hotel,10"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 19198,
            rating: 4.56,
            numberOfBathrooms: 4,
            numberOfBeds: 3,
            numberOfguest: 7,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 20",
             hostJoinedOn: "Apr 2023",
             ameneties: [
                "Wifi",
                "Air Conditioning",
                "Parking",
                "Pets Allowed",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "96b30771-1729-4da2-be68-4931a2178ac4",
            name: "Hotel 338",
            category: "Campervans",
            image: "https://source.unsplash.com/400x300/?hotel,room,21",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,42",
                "https://source.unsplash.com/400x300/?hotel,41",
                "https://source.unsplash.com/400x300/?hotel,74",
                "https://source.unsplash.com/400x300/?hotel,51"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 16894,
            rating: 4.63,
            numberOfBathrooms: 3,
            numberOfBeds: 3,
            numberOfguest: 2,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 50",
             hostJoinedOn: "Nov 2016",
             ameneties: [
                "Swimming Pool",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "80e18ed0-9dd3-4ae1-a150-f5beff885dba",
            name: "Hotel 311",
            category: "Earth Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,59",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,11",
                "https://source.unsplash.com/400x300/?hotel,88",
                "https://source.unsplash.com/400x300/?hotel,41",
                "https://source.unsplash.com/400x300/?hotel,52"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 14008,
            rating: 3.79,
            numberOfBathrooms: 2,
            numberOfBeds: 3,
            numberOfguest: 1,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 43",
             hostJoinedOn: "Dec 2022",
             ameneties: [
                "Kitchen",
                "Parking"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "48ef2e06-1ef8-4f5d-a4ae-2f6226500176",
            name: "Hotel 402",
            category: "Campervans",
            image: "https://source.unsplash.com/400x300/?hotel,room,52",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,23",
                "https://source.unsplash.com/400x300/?hotel,65",
                "https://source.unsplash.com/400x300/?hotel,82",
                "https://source.unsplash.com/400x300/?hotel,67"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 7360,
            rating: 3.76,
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 4,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 36",
             hostJoinedOn: "Sep 2023",
             ameneties: [
                "Parking",
                "Wifi",
                "Air Conditioning",
                "Pets Allowed",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "46849d96-5a41-41ad-b1d3-6b12d513c90d",
            name: "Hotel 481",
            category: "Castle",
            image: "https://source.unsplash.com/400x300/?hotel,room,35",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,4",
                "https://source.unsplash.com/400x300/?hotel,43",
                "https://source.unsplash.com/400x300/?hotel,94",
                "https://source.unsplash.com/400x300/?hotel,40"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 14696,
            rating: 4.45,
            numberOfBathrooms: 4,
            numberOfBeds: 2,
            numberOfguest: 6,
             numberOfBedrooms: 3,
             numberOfStudies: 2,
             hostName: "Host 41",
             hostJoinedOn: "Nov 2015",
             ameneties: [
                "Pets Allowed",
                "Parking"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "07f5ac20-8657-44ce-a4b0-6455f75b523e",
            name: "Hotel 610",
            category: "Historical Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,46",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,99",
                "https://source.unsplash.com/400x300/?hotel,40",
                "https://source.unsplash.com/400x300/?hotel,12",
                "https://source.unsplash.com/400x300/?hotel,50"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 5804,
            rating: 3.84,
            numberOfBathrooms: 1,
            numberOfBeds: 3,
            numberOfguest: 2,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 9",
             hostJoinedOn: "Dec 2016",
             ameneties: [
                "Pets Allowed",
                "Swimming Pool",
                "Air Conditioning",
                "Parking"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "13f051c9-b125-4c80-89df-ba0dc1606586",
            name: "Hotel 758",
            category: "Treehouses",
            image: "https://source.unsplash.com/400x300/?hotel,room,90",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,35",
                "https://source.unsplash.com/400x300/?hotel,40",
                "https://source.unsplash.com/400x300/?hotel,7",
                "https://source.unsplash.com/400x300/?hotel,62"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 5751,
            rating: 4.58,
            numberOfBathrooms: 3,
            numberOfBeds: 1,
            numberOfguest: 8,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 16",
             hostJoinedOn: "Nov 2020",
             ameneties: [
                "Wifi",
                "Swimming Pool",
                "Air Conditioning",
                "Parking",
                "Kitchen"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "3ed603d8-e5a7-4a78-90dd-935f4efe5886",
            name: "Hotel 716",
            category: "Golfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,54",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,76",
                "https://source.unsplash.com/400x300/?hotel,44",
                "https://source.unsplash.com/400x300/?hotel,74",
                "https://source.unsplash.com/400x300/?hotel,44"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 9717,
            rating: 4.44,
            numberOfBathrooms: 1,
            numberOfBeds: 2,
            numberOfguest: 4,
             numberOfBedrooms: 2,
             numberOfStudies: 2,
             hostName: "Host 22",
             hostJoinedOn: "Jul 2021",
             ameneties: [
                "Kitchen",
                "Pets Allowed",
                "Parking"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "556aa954-0ac7-4b56-ac69-6c9702485417",
            name: "Hotel 394",
            category: "Amazing Pools",
            image: "https://source.unsplash.com/400x300/?hotel,room,25",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,31",
                "https://source.unsplash.com/400x300/?hotel,98",
                "https://source.unsplash.com/400x300/?hotel,54",
                "https://source.unsplash.com/400x300/?hotel,52"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 5910,
            rating: 3.95,
            numberOfBathrooms: 1,
            numberOfBeds: 2,
            numberOfguest: 7,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 6",
             hostJoinedOn: "Mar 2020",
             ameneties: [
                "Parking",
                "Pets Allowed",
                "Wifi"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "1fa84320-7cc0-4be6-975f-7a6f277bc96d",
            name: "Hotel 435",
            category: "Surfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,37",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,28",
                "https://source.unsplash.com/400x300/?hotel,30",
                "https://source.unsplash.com/400x300/?hotel,54",
                "https://source.unsplash.com/400x300/?hotel,57"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 16673,
            rating: 4.92,
            numberOfBathrooms: 1,
            numberOfBeds: 1,
            numberOfguest: 3,
             numberOfBedrooms: 3,
             numberOfStudies: 2,
             hostName: "Host 44",
             hostJoinedOn: "Apr 2017",
             ameneties: [
                "Air Conditioning",
                "Swimming Pool",
                "Wifi"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "99ad5f33-0b57-4c50-8f40-14411908f5a5",
            name: "Hotel 256",
            category: "Campervans",
            image: "https://source.unsplash.com/400x300/?hotel,room,67",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,73",
                "https://source.unsplash.com/400x300/?hotel,67",
                "https://source.unsplash.com/400x300/?hotel,51",
                "https://source.unsplash.com/400x300/?hotel,44"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 12586,
            rating: 4.81,
            numberOfBathrooms: 3,
            numberOfBeds: 3,
            numberOfguest: 8,
             numberOfBedrooms: 2,
             numberOfStudies: 0,
             hostName: "Host 16",
             hostJoinedOn: "Aug 2016",
             ameneties: [
                "Wifi",
                "Swimming Pool",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "1fc35543-a906-415a-8aed-7f1cec91909e",
            name: "Hotel 798",
            category: "Bed & Breakfast",
            image: "https://source.unsplash.com/400x300/?hotel,room,85",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,2",
                "https://source.unsplash.com/400x300/?hotel,6",
                "https://source.unsplash.com/400x300/?hotel,59",
                "https://source.unsplash.com/400x300/?hotel,48"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 4683,
            rating: 4.2,
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 12",
             hostJoinedOn: "Jul 2017",
             ameneties: [
                "Air Conditioning",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "0f7906f3-6f1d-48f1-aa85-34af3eb64729",
            name: "Hotel 586",
            category: "Cabins",
            image: "https://source.unsplash.com/400x300/?hotel,room,43",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,53",
                "https://source.unsplash.com/400x300/?hotel,57",
                "https://source.unsplash.com/400x300/?hotel,16",
                "https://source.unsplash.com/400x300/?hotel,85"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 13397,
            rating: 3.55,
            numberOfBathrooms: 1,
            numberOfBeds: 2,
            numberOfguest: 4,
             numberOfBedrooms: 2,
             numberOfStudies: 0,
             hostName: "Host 16",
             hostJoinedOn: "Aug 2016",
             ameneties: [
                "Parking",
                "Pets Allowed",
                "Swimming Pool",
                "Wifi",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "c10a5eac-e376-4c35-836c-93288c9ba404",
            name: "Hotel 171",
            category: "Surfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,72",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,82",
                "https://source.unsplash.com/400x300/?hotel,62",
                "https://source.unsplash.com/400x300/?hotel,61",
                "https://source.unsplash.com/400x300/?hotel,80"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 10819,
            rating: 3.71,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 7,
             numberOfBedrooms: 4,
             numberOfStudies: 2,
             hostName: "Host 31",
             hostJoinedOn: "Apr 2022",
             ameneties: [
                "Pets Allowed",
                "Wifi",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "c69d2d57-8193-479d-857a-487901bd29cd",
            name: "Hotel 682",
            category: "Design",
            image: "https://source.unsplash.com/400x300/?hotel,room,80",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,19",
                "https://source.unsplash.com/400x300/?hotel,70",
                "https://source.unsplash.com/400x300/?hotel,12",
                "https://source.unsplash.com/400x300/?hotel,67"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 5629,
            rating: 4.32,
            numberOfBathrooms: 4,
            numberOfBeds: 1,
            numberOfguest: 2,
             numberOfBedrooms: 2,
             numberOfStudies: 2,
             hostName: "Host 17",
             hostJoinedOn: "May 2017",
             ameneties: [
                "Air Conditioning",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "5a55893e-5c03-4df7-aeb8-9356b2bae4c3",
            name: "Hotel 888",
            category: "Golfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,62",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,87",
                "https://source.unsplash.com/400x300/?hotel,12",
                "https://source.unsplash.com/400x300/?hotel,70",
                "https://source.unsplash.com/400x300/?hotel,53"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 11978,
            rating: 3.63,
            numberOfBathrooms: 5,
            numberOfBeds: 4,
            numberOfguest: 6,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 42",
             hostJoinedOn: "Jan 2023",
             ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed",
                "Swimming Pool",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "74dd28ff-95da-4e86-acea-ff3cf365f065",
            name: "Hotel 310",
            category: "Tropical",
            image: "https://source.unsplash.com/400x300/?hotel,room,12",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,18",
                "https://source.unsplash.com/400x300/?hotel,69",
                "https://source.unsplash.com/400x300/?hotel,80",
                "https://source.unsplash.com/400x300/?hotel,56"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 19247,
            rating: 4.32,
            numberOfBathrooms: 2,
            numberOfBeds: 2,
            numberOfguest: 6,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 27",
             hostJoinedOn: "Nov 2017",
             ameneties: [
                "Pets Allowed",
                "Wifi",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "042b62c3-e0ee-4f4c-aa22-c34be754eadf",
            name: "Hotel 788",
            category: "A-frames",
            image: "https://source.unsplash.com/400x300/?hotel,room,13",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,1",
                "https://source.unsplash.com/400x300/?hotel,26",
                "https://source.unsplash.com/400x300/?hotel,12",
                "https://source.unsplash.com/400x300/?hotel,40"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 11496,
            rating: 4.67,
            numberOfBathrooms: 1,
            numberOfBeds: 3,
            numberOfguest: 2,
             numberOfBedrooms: 3,
             numberOfStudies: 1,
             hostName: "Host 14",
             hostJoinedOn: "Sep 2023",
             ameneties: [
                "Wifi",
                "Swimming Pool",
                "Parking",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "9702176e-0c34-4020-9b74-688679b1171a",
            name: "Hotel 459",
            category: "National Parks",
            image: "https://source.unsplash.com/400x300/?hotel,room,28",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,81",
                "https://source.unsplash.com/400x300/?hotel,74",
                "https://source.unsplash.com/400x300/?hotel,27",
                "https://source.unsplash.com/400x300/?hotel,88"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 8006,
            rating: 4.17,
            numberOfBathrooms: 2,
            numberOfBeds: 4,
            numberOfguest: 5,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 31",
             hostJoinedOn: "Mar 2020",
             ameneties: [
                "Wifi",
                "Air Conditioning",
                "Swimming Pool",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "d97a9042-8911-4974-9888-dfbf973cfc83",
            name: "Hotel 634",
            category: "Design",
            image: "https://source.unsplash.com/400x300/?hotel,room,33",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,87",
                "https://source.unsplash.com/400x300/?hotel,67",
                "https://source.unsplash.com/400x300/?hotel,70",
                "https://source.unsplash.com/400x300/?hotel,45"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 5927,
            rating: 3.61,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 7,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 1",
             hostJoinedOn: "Sep 2020",
             ameneties: [
                "Parking",
                "Kitchen",
                "Swimming Pool",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "b5c2cccf-4b89-46fb-b5ea-74353a8ae37f",
            name: "Hotel 196",
            category: "Amazing Views",
            image: "https://source.unsplash.com/400x300/?hotel,room,48",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,52",
                "https://source.unsplash.com/400x300/?hotel,18",
                "https://source.unsplash.com/400x300/?hotel,63",
                "https://source.unsplash.com/400x300/?hotel,37"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 4206,
            rating: 4.19,
            numberOfBathrooms: 5,
            numberOfBeds: 3,
            numberOfguest: 3,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 20",
             hostJoinedOn: "Feb 2017",
             ameneties: [
                "Swimming Pool",
                "Pets Allowed",
                "Wifi",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "81c8d87c-4bfa-4c50-bbf1-3231b5cdafe1",
            name: "Hotel 799",
            category: "Design",
            image: "https://source.unsplash.com/400x300/?hotel,room,39",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,49",
                "https://source.unsplash.com/400x300/?hotel,92",
                "https://source.unsplash.com/400x300/?hotel,64",
                "https://source.unsplash.com/400x300/?hotel,73"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 12488,
            rating: 4.97,
            numberOfBathrooms: 1,
            numberOfBeds: 2,
            numberOfguest: 1,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 46",
             hostJoinedOn: "May 2015",
             ameneties: [
                "Parking",
                "Wifi",
                "Kitchen"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "e5f71420-2273-4c5f-87d2-0fcc05fefd9b",
            name: "Hotel 807",
            category: "Amazing Views",
            image: "https://source.unsplash.com/400x300/?hotel,room,59",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,14",
                "https://source.unsplash.com/400x300/?hotel,14",
                "https://source.unsplash.com/400x300/?hotel,47",
                "https://source.unsplash.com/400x300/?hotel,4"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 7989,
            rating: 4.84,
            numberOfBathrooms: 2,
            numberOfBeds: 3,
            numberOfguest: 7,
             numberOfBedrooms: 3,
             numberOfStudies: 2,
             hostName: "Host 23",
             hostJoinedOn: "May 2016",
             ameneties: [
                "Swimming Pool",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "bc6101c2-f9b2-4eeb-b593-55c0ceb770d5",
            name: "Hotel 174",
            category: "Design",
            image: "https://source.unsplash.com/400x300/?hotel,room,96",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,88",
                "https://source.unsplash.com/400x300/?hotel,11",
                "https://source.unsplash.com/400x300/?hotel,60",
                "https://source.unsplash.com/400x300/?hotel,58"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 8966,
            rating: 4.68,
            numberOfBathrooms: 5,
            numberOfBeds: 1,
            numberOfguest: 7,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 50",
             hostJoinedOn: "Dec 2015",
             ameneties: [
                "Wifi",
                "Air Conditioning",
                "Swimming Pool",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "04f3c059-7b4a-4dbd-a1e8-7da8ea9a6d10",
            name: "Hotel 750",
            category: "A-frames",
            image: "https://source.unsplash.com/400x300/?hotel,room,41",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,44",
                "https://source.unsplash.com/400x300/?hotel,99",
                "https://source.unsplash.com/400x300/?hotel,68",
                "https://source.unsplash.com/400x300/?hotel,72"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 17524,
            rating: 4.57,
            numberOfBathrooms: 4,
            numberOfBeds: 1,
            numberOfguest: 7,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 7",
             hostJoinedOn: "Jul 2023",
             ameneties: [
                "Parking",
                "Swimming Pool",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "5280aa02-904f-4756-93f2-8f163574c38d",
            name: "Hotel 335",
            category: "Tropical",
            image: "https://source.unsplash.com/400x300/?hotel,room,50",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,57",
                "https://source.unsplash.com/400x300/?hotel,57",
                "https://source.unsplash.com/400x300/?hotel,98",
                "https://source.unsplash.com/400x300/?hotel,39"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 6989,
            rating: 3.89,
            numberOfBathrooms: 5,
            numberOfBeds: 2,
            numberOfguest: 2,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 22",
             hostJoinedOn: "Jul 2017",
             ameneties: [
                "Kitchen",
                "Parking",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "46c771e8-f758-45b5-9ebc-5fe46460e9ea",
            name: "Hotel 398",
            category: "Amazing Views",
            image: "https://source.unsplash.com/400x300/?hotel,room,24",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,86",
                "https://source.unsplash.com/400x300/?hotel,74",
                "https://source.unsplash.com/400x300/?hotel,55",
                "https://source.unsplash.com/400x300/?hotel,66"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 3909,
            rating: 4.99,
            numberOfBathrooms: 5,
            numberOfBeds: 3,
            numberOfguest: 4,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 6",
             hostJoinedOn: "Feb 2023",
             ameneties: [
                "Swimming Pool",
                "Pets Allowed",
                "Kitchen",
                "Wifi"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "bd13ac65-aa64-4bde-aef7-d6dd046ba81a",
            name: "Hotel 222",
            category: "Caves",
            image: "https://source.unsplash.com/400x300/?hotel,room,61",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,95",
                "https://source.unsplash.com/400x300/?hotel,95",
                "https://source.unsplash.com/400x300/?hotel,43",
                "https://source.unsplash.com/400x300/?hotel,93"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 19472,
            rating: 3.62,
            numberOfBathrooms: 1,
            numberOfBeds: 2,
            numberOfguest: 4,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 37",
             hostJoinedOn: "Apr 2016",
             ameneties: [
                "Air Conditioning",
                "Pets Allowed",
                "Parking",
                "Kitchen",
                "Wifi"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "40f189b9-da9d-4494-945e-52bfda9db5c3",
            name: "Hotel 130",
            category: "Amazing Views",
            image: "https://source.unsplash.com/400x300/?hotel,room,7",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,96",
                "https://source.unsplash.com/400x300/?hotel,1",
                "https://source.unsplash.com/400x300/?hotel,34",
                "https://source.unsplash.com/400x300/?hotel,14"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 15371,
            rating: 4.61,
            numberOfBathrooms: 4,
            numberOfBeds: 4,
            numberOfguest: 8,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 47",
             hostJoinedOn: "Feb 2015",
             ameneties: [
                "Parking",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "da818a7a-3ba9-46f4-b98e-5ff57f653484",
            name: "Hotel 391",
            category: "Historical Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,29",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,47",
                "https://source.unsplash.com/400x300/?hotel,73",
                "https://source.unsplash.com/400x300/?hotel,21",
                "https://source.unsplash.com/400x300/?hotel,52"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 5507,
            rating: 4.77,
            numberOfBathrooms: 5,
            numberOfBeds: 3,
            numberOfguest: 1,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 13",
             hostJoinedOn: "Feb 2017",
             ameneties: [
                "Air Conditioning",
                "Kitchen",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "ef110108-52d1-49f1-b8b5-e391e49ef4bf",
            name: "Hotel 244",
            category: "Island",
            image: "https://source.unsplash.com/400x300/?hotel,room,40",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,35",
                "https://source.unsplash.com/400x300/?hotel,18",
                "https://source.unsplash.com/400x300/?hotel,21",
                "https://source.unsplash.com/400x300/?hotel,85"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 7348,
            rating: 4.22,
            numberOfBathrooms: 3,
            numberOfBeds: 3,
            numberOfguest: 2,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 30",
             hostJoinedOn: "Oct 2023",
             ameneties: [
                "Kitchen",
                "Swimming Pool",
                "Parking"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "9731ae60-09d9-4149-80cf-8727a36f1798",
            name: "Hotel 274",
            category: "Luxe",
            image: "https://source.unsplash.com/400x300/?hotel,room,65",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,33",
                "https://source.unsplash.com/400x300/?hotel,77",
                "https://source.unsplash.com/400x300/?hotel,96",
                "https://source.unsplash.com/400x300/?hotel,4"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 10964,
            rating: 4.38,
            numberOfBathrooms: 3,
            numberOfBeds: 1,
            numberOfguest: 3,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 42",
             hostJoinedOn: "Feb 2017",
             ameneties: [
                "Pets Allowed",
                "Air Conditioning",
                "Kitchen"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "7534e6b6-2d72-406a-9ced-93187bf14bd8",
            name: "Hotel 947",
            category: "Castle",
            image: "https://source.unsplash.com/400x300/?hotel,room,89",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,75",
                "https://source.unsplash.com/400x300/?hotel,31",
                "https://source.unsplash.com/400x300/?hotel,100",
                "https://source.unsplash.com/400x300/?hotel,74"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 19441,
            rating: 3.89,
            numberOfBathrooms: 1,
            numberOfBeds: 3,
            numberOfguest: 4,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 44",
             hostJoinedOn: "Jun 2020",
             ameneties: [
                "Swimming Pool",
                "Kitchen",
                "Wifi"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "6ae93a60-cb93-426b-a42e-52373dfb8880",
            name: "Hotel 535",
            category: "Treehouses",
            image: "https://source.unsplash.com/400x300/?hotel,room,77",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,89",
                "https://source.unsplash.com/400x300/?hotel,71",
                "https://source.unsplash.com/400x300/?hotel,95",
                "https://source.unsplash.com/400x300/?hotel,61"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 11129,
            rating: 4.29,
            numberOfBathrooms: 5,
            numberOfBeds: 4,
            numberOfguest: 8,
             numberOfBedrooms: 3,
             numberOfStudies: 2,
             hostName: "Host 5",
             hostJoinedOn: "Mar 2022",
             ameneties: [
                "Swimming Pool",
                "Air Conditioning",
                "Parking",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "a9baccd6-c5f2-4270-a22d-e0f21aa79024",
            name: "Hotel 439",
            category: "Island",
            image: "https://source.unsplash.com/400x300/?hotel,room,13",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,70",
                "https://source.unsplash.com/400x300/?hotel,9",
                "https://source.unsplash.com/400x300/?hotel,59",
                "https://source.unsplash.com/400x300/?hotel,12"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 8669,
            rating: 3.76,
            numberOfBathrooms: 5,
            numberOfBeds: 3,
            numberOfguest: 8,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 32",
             hostJoinedOn: "Sep 2019",
             ameneties: [
                "Wifi",
                "Air Conditioning",
                "Swimming Pool",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "376ad1f7-c4fd-40cf-b2da-4b80124323b7",
            name: "Hotel 597",
            category: "National Parks",
            image: "https://source.unsplash.com/400x300/?hotel,room,30",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,60",
                "https://source.unsplash.com/400x300/?hotel,60",
                "https://source.unsplash.com/400x300/?hotel,29",
                "https://source.unsplash.com/400x300/?hotel,80"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 14882,
            rating: 3.72,
            numberOfBathrooms: 2,
            numberOfBeds: 2,
            numberOfguest: 1,
             numberOfBedrooms: 3,
             numberOfStudies: 1,
             hostName: "Host 12",
             hostJoinedOn: "Aug 2021",
             ameneties: [
                "Pets Allowed",
                "Air Conditioning",
                "Swimming Pool",
                "Wifi",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "137b7f9e-bd0c-4183-a0a8-f59420f0851c",
            name: "Hotel 812",
            category: "Earth Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,73",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,81",
                "https://source.unsplash.com/400x300/?hotel,100",
                "https://source.unsplash.com/400x300/?hotel,49",
                "https://source.unsplash.com/400x300/?hotel,69"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 18516,
            rating: 4.67,
            numberOfBathrooms: 5,
            numberOfBeds: 2,
            numberOfguest: 8,
             numberOfBedrooms: 2,
             numberOfStudies: 0,
             hostName: "Host 47",
             hostJoinedOn: "Jul 2018",
             ameneties: [
                "Pets Allowed",
                "Parking",
                "Kitchen",
                "Air Conditioning",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "40c27ab9-6f0b-49fd-913c-883f2d158202",
            name: "Hotel 143",
            category: "Golfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,35",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,26",
                "https://source.unsplash.com/400x300/?hotel,43",
                "https://source.unsplash.com/400x300/?hotel,45",
                "https://source.unsplash.com/400x300/?hotel,58"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 17914,
            rating: 3.53,
            numberOfBathrooms: 5,
            numberOfBeds: 3,
            numberOfguest: 1,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 42",
             hostJoinedOn: "Mar 2015",
             ameneties: [
                "Pets Allowed",
                "Parking",
                "Swimming Pool",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "b4a993ac-92fb-4dca-a9f7-1fa652393c1e",
            name: "Hotel 569",
            category: "Amazing Pools",
            image: "https://source.unsplash.com/400x300/?hotel,room,88",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,77",
                "https://source.unsplash.com/400x300/?hotel,80",
                "https://source.unsplash.com/400x300/?hotel,62",
                "https://source.unsplash.com/400x300/?hotel,1"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 4575,
            rating: 4.92,
            numberOfBathrooms: 3,
            numberOfBeds: 2,
            numberOfguest: 3,
             numberOfBedrooms: 4,
             numberOfStudies: 2,
             hostName: "Host 44",
             hostJoinedOn: "Mar 2017",
             ameneties: [
                "Wifi",
                "Parking",
                "Swimming Pool",
                "Kitchen",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "0cec35bb-710d-4300-abb1-f002f1ba3def",
            name: "Hotel 211",
            category: "Bed & Breakfast",
            image: "https://source.unsplash.com/400x300/?hotel,room,10",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,68",
                "https://source.unsplash.com/400x300/?hotel,99",
                "https://source.unsplash.com/400x300/?hotel,61",
                "https://source.unsplash.com/400x300/?hotel,49"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 5196,
            rating: 4.63,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 8,
             numberOfBedrooms: 2,
             numberOfStudies: 2,
             hostName: "Host 11",
             hostJoinedOn: "Jun 2016",
             ameneties: [
                "Air Conditioning",
                "Wifi",
                "Parking"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "04e7b1b5-54de-45e6-9910-167ad9edcc52",
            name: "Hotel 935",
            category: "Shared Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,1",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,85",
                "https://source.unsplash.com/400x300/?hotel,35",
                "https://source.unsplash.com/400x300/?hotel,54",
                "https://source.unsplash.com/400x300/?hotel,90"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 14316,
            rating: 4.29,
            numberOfBathrooms: 5,
            numberOfBeds: 1,
            numberOfguest: 6,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 22",
             hostJoinedOn: "Oct 2021",
             ameneties: [
                "Wifi",
                "Swimming Pool",
                "Kitchen"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "4aa3b2eb-5c8c-4b18-8c5f-215b28f9d336",
            name: "Hotel 231",
            category: "Campervans",
            image: "https://source.unsplash.com/400x300/?hotel,room,66",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,62",
                "https://source.unsplash.com/400x300/?hotel,57",
                "https://source.unsplash.com/400x300/?hotel,23",
                "https://source.unsplash.com/400x300/?hotel,44"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 5676,
            rating: 4.49,
            numberOfBathrooms: 2,
            numberOfBeds: 3,
            numberOfguest: 3,
             numberOfBedrooms: 3,
             numberOfStudies: 2,
             hostName: "Host 9",
             hostJoinedOn: "Jan 2015",
             ameneties: [
                "Wifi",
                "Pets Allowed",
                "Parking"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "abe16b01-e29a-48df-bcf9-798b62caaf43",
            name: "Hotel 969",
            category: "Bed & Breakfast",
            image: "https://source.unsplash.com/400x300/?hotel,room,80",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,62",
                "https://source.unsplash.com/400x300/?hotel,48",
                "https://source.unsplash.com/400x300/?hotel,9",
                "https://source.unsplash.com/400x300/?hotel,82"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 9196,
            rating: 4.37,
            numberOfBathrooms: 3,
            numberOfBeds: 1,
            numberOfguest: 5,
             numberOfBedrooms: 2,
             numberOfStudies: 0,
             hostName: "Host 12",
             hostJoinedOn: "Nov 2019",
             ameneties: [
                "Swimming Pool",
                "Kitchen",
                "Wifi",
                "Parking",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "db8bb131-e3e7-453f-b7a7-00af71b3d27e",
            name: "Hotel 663",
            category: "Luxe",
            image: "https://source.unsplash.com/400x300/?hotel,room,2",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,66",
                "https://source.unsplash.com/400x300/?hotel,66",
                "https://source.unsplash.com/400x300/?hotel,57",
                "https://source.unsplash.com/400x300/?hotel,21"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 10851,
            rating: 3.65,
            numberOfBathrooms: 3,
            numberOfBeds: 3,
            numberOfguest: 6,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 49",
             hostJoinedOn: "Jul 2015",
             ameneties: [
                "Wifi",
                "Kitchen"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "71411827-c748-49f5-81b6-da732aca9bef",
            name: "Hotel 326",
            category: "Campervans",
            image: "https://source.unsplash.com/400x300/?hotel,room,13",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,62",
                "https://source.unsplash.com/400x300/?hotel,40",
                "https://source.unsplash.com/400x300/?hotel,48",
                "https://source.unsplash.com/400x300/?hotel,30"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 11202,
            rating: 4.01,
            numberOfBathrooms: 1,
            numberOfBeds: 2,
            numberOfguest: 6,
             numberOfBedrooms: 2,
             numberOfStudies: 0,
             hostName: "Host 21",
             hostJoinedOn: "Sep 2019",
             ameneties: [
                "Air Conditioning",
                "Wifi",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "38060b52-8627-4e24-a3de-a374372ba6b8",
            name: "Hotel 388",
            category: "Lakefront",
            image: "https://source.unsplash.com/400x300/?hotel,room,43",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,50",
                "https://source.unsplash.com/400x300/?hotel,46",
                "https://source.unsplash.com/400x300/?hotel,21",
                "https://source.unsplash.com/400x300/?hotel,9"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 2555,
            rating: 4.87,
            numberOfBathrooms: 5,
            numberOfBeds: 4,
            numberOfguest: 5,
             numberOfBedrooms: 4,
             numberOfStudies: 2,
             hostName: "Host 42",
             hostJoinedOn: "Dec 2019",
             ameneties: [
                "Wifi",
                "Pets Allowed",
                "Air Conditioning",
                "Swimming Pool",
                "Parking"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "3499c651-0260-4cf2-bdc1-e5c3a09d96e0",
            name: "Hotel 142",
            category: "Amazing Pools",
            image: "https://source.unsplash.com/400x300/?hotel,room,53",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,23",
                "https://source.unsplash.com/400x300/?hotel,2",
                "https://source.unsplash.com/400x300/?hotel,3",
                "https://source.unsplash.com/400x300/?hotel,65"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 10222,
            rating: 3.89,
            numberOfBathrooms: 3,
            numberOfBeds: 2,
            numberOfguest: 6,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 7",
             hostJoinedOn: "Nov 2019",
             ameneties: [
                "Pets Allowed",
                "Swimming Pool",
                "Parking",
                "Wifi"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "72529955-e937-4d13-8352-eb4fee0585d0",
            name: "Hotel 261",
            category: "Surfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,71",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,89",
                "https://source.unsplash.com/400x300/?hotel,45",
                "https://source.unsplash.com/400x300/?hotel,12",
                "https://source.unsplash.com/400x300/?hotel,81"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 9432,
            rating: 4.27,
            numberOfBathrooms: 4,
            numberOfBeds: 2,
            numberOfguest: 2,
             numberOfBedrooms: 4,
             numberOfStudies: 2,
             hostName: "Host 40",
             hostJoinedOn: "Sep 2021",
             ameneties: [
                "Swimming Pool",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "fd14b370-86d1-4b89-a633-bfe2503c896c",
            name: "Hotel 970",
            category: "Caves",
            image: "https://source.unsplash.com/400x300/?hotel,room,98",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,13",
                "https://source.unsplash.com/400x300/?hotel,34",
                "https://source.unsplash.com/400x300/?hotel,89",
                "https://source.unsplash.com/400x300/?hotel,76"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 3099,
            rating: 4.54,
            numberOfBathrooms: 4,
            numberOfBeds: 2,
            numberOfguest: 2,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 16",
             hostJoinedOn: "Mar 2015",
             ameneties: [
                "Pets Allowed",
                "Parking",
                "Swimming Pool",
                "Kitchen",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "9cf76c1c-91c3-4184-8232-98930ae73105",
            name: "Hotel 820",
            category: "Bed & Breakfast",
            image: "https://source.unsplash.com/400x300/?hotel,room,73",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,42",
                "https://source.unsplash.com/400x300/?hotel,57",
                "https://source.unsplash.com/400x300/?hotel,3",
                "https://source.unsplash.com/400x300/?hotel,93"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 4986,
            rating: 4.29,
            numberOfBathrooms: 2,
            numberOfBeds: 2,
            numberOfguest: 3,
             numberOfBedrooms: 3,
             numberOfStudies: 2,
             hostName: "Host 34",
             hostJoinedOn: "Mar 2020",
             ameneties: [
                "Parking",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "e0339589-b4e0-4e9d-887f-d0d96ab988b8",
            name: "Hotel 720",
            category: "Tropical",
            image: "https://source.unsplash.com/400x300/?hotel,room,50",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,69",
                "https://source.unsplash.com/400x300/?hotel,22",
                "https://source.unsplash.com/400x300/?hotel,2",
                "https://source.unsplash.com/400x300/?hotel,37"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 7378,
            rating: 4.62,
            numberOfBathrooms: 5,
            numberOfBeds: 1,
            numberOfguest: 1,
             numberOfBedrooms: 4,
             numberOfStudies: 2,
             hostName: "Host 14",
             hostJoinedOn: "Nov 2018",
             ameneties: [
                "Swimming Pool",
                "Parking",
                "Air Conditioning",
                "Wifi"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "efddadba-4781-44e4-a205-31df57f645af",
            name: "Hotel 124",
            category: "Shared Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,98",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,80",
                "https://source.unsplash.com/400x300/?hotel,17",
                "https://source.unsplash.com/400x300/?hotel,62",
                "https://source.unsplash.com/400x300/?hotel,18"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 6269,
            rating: 3.84,
            numberOfBathrooms: 1,
            numberOfBeds: 4,
            numberOfguest: 3,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 3",
             hostJoinedOn: "Jun 2021",
             ameneties: [
                "Wifi",
                "Swimming Pool",
                "Pets Allowed",
                "Air Conditioning",
                "Parking"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "08eea0b6-c046-4693-9999-0c908d284bae",
            name: "Hotel 599",
            category: "Amazing Pools",
            image: "https://source.unsplash.com/400x300/?hotel,room,56",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,54",
                "https://source.unsplash.com/400x300/?hotel,75",
                "https://source.unsplash.com/400x300/?hotel,37",
                "https://source.unsplash.com/400x300/?hotel,37"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 17467,
            rating: 4.4,
            numberOfBathrooms: 4,
            numberOfBeds: 3,
            numberOfguest: 8,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 26",
             hostJoinedOn: "Dec 2021",
             ameneties: [
                "Wifi",
                "Kitchen",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "0c388231-ddc5-465c-989c-51df515aef39",
            name: "Hotel 956",
            category: "Bed & Breakfast",
            image: "https://source.unsplash.com/400x300/?hotel,room,20",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,17",
                "https://source.unsplash.com/400x300/?hotel,82",
                "https://source.unsplash.com/400x300/?hotel,82",
                "https://source.unsplash.com/400x300/?hotel,93"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 4878,
            rating: 4.9,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 4,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 34",
             hostJoinedOn: "May 2015",
             ameneties: [
                "Parking",
                "Swimming Pool",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "3dc2c053-5f1a-4f0e-9c75-67c7e47da9fe",
            name: "Hotel 316",
            category: "Cabins",
            image: "https://source.unsplash.com/400x300/?hotel,room,98",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,89",
                "https://source.unsplash.com/400x300/?hotel,37",
                "https://source.unsplash.com/400x300/?hotel,30",
                "https://source.unsplash.com/400x300/?hotel,18"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 16828,
            rating: 4.48,
            numberOfBathrooms: 1,
            numberOfBeds: 1,
            numberOfguest: 6,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 7",
             hostJoinedOn: "Jan 2021",
             ameneties: [
                "Parking",
                "Wifi"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "d75b3994-b96a-4516-93ec-bbff3b1a8e9d",
            name: "Hotel 868",
            category: "Golfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,2",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,66",
                "https://source.unsplash.com/400x300/?hotel,15",
                "https://source.unsplash.com/400x300/?hotel,99",
                "https://source.unsplash.com/400x300/?hotel,21"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 14123,
            rating: 3.56,
            numberOfBathrooms: 3,
            numberOfBeds: 2,
            numberOfguest: 5,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 13",
             hostJoinedOn: "Feb 2019",
             ameneties: [
                "Pets Allowed",
                "Swimming Pool",
                "Parking",
                "Wifi"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "80c29c3c-7bc0-465e-a2b9-d18c175bdf5e",
            name: "Hotel 901",
            category: "Golfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,17",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,60",
                "https://source.unsplash.com/400x300/?hotel,7",
                "https://source.unsplash.com/400x300/?hotel,53",
                "https://source.unsplash.com/400x300/?hotel,87"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 11621,
            rating: 3.75,
            numberOfBathrooms: 5,
            numberOfBeds: 3,
            numberOfguest: 8,
             numberOfBedrooms: 3,
             numberOfStudies: 1,
             hostName: "Host 31",
             hostJoinedOn: "Mar 2016",
             ameneties: [
                "Air Conditioning",
                "Kitchen",
                "Parking",
                "Wifi",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "66a6013f-8708-461e-96aa-797aeef34ad7",
            name: "Hotel 218",
            category: "Tropical",
            image: "https://source.unsplash.com/400x300/?hotel,room,62",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,26",
                "https://source.unsplash.com/400x300/?hotel,24",
                "https://source.unsplash.com/400x300/?hotel,63",
                "https://source.unsplash.com/400x300/?hotel,36"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 18879,
            rating: 4.89,
            numberOfBathrooms: 5,
            numberOfBeds: 2,
            numberOfguest: 1,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 25",
             hostJoinedOn: "Nov 2016",
             ameneties: [
                "Air Conditioning",
                "Pets Allowed",
                "Swimming Pool",
                "Parking"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "4b5d1350-7218-4791-adc7-e82f54359de0",
            name: "Hotel 425",
            category: "Farms",
            image: "https://source.unsplash.com/400x300/?hotel,room,97",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,90",
                "https://source.unsplash.com/400x300/?hotel,85",
                "https://source.unsplash.com/400x300/?hotel,92",
                "https://source.unsplash.com/400x300/?hotel,29"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 7860,
            rating: 4.87,
            numberOfBathrooms: 1,
            numberOfBeds: 4,
            numberOfguest: 4,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 44",
             hostJoinedOn: "Feb 2018",
             ameneties: [
                "Wifi",
                "Parking",
                "Pets Allowed",
                "Kitchen",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "bdf1dd68-7d66-408f-83a5-c5cf75de063a",
            name: "Hotel 883",
            category: "Island",
            image: "https://source.unsplash.com/400x300/?hotel,room,9",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,71",
                "https://source.unsplash.com/400x300/?hotel,74",
                "https://source.unsplash.com/400x300/?hotel,8",
                "https://source.unsplash.com/400x300/?hotel,80"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 16389,
            rating: 4.4,
            numberOfBathrooms: 5,
            numberOfBeds: 4,
            numberOfguest: 2,
             numberOfBedrooms: 3,
             numberOfStudies: 1,
             hostName: "Host 50",
             hostJoinedOn: "Nov 2016",
             ameneties: [
                "Parking",
                "Kitchen",
                "Wifi"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "bd5fae44-d2f9-4a5b-b4aa-cd7a62699fa7",
            name: "Hotel 956",
            category: "Tropical",
            image: "https://source.unsplash.com/400x300/?hotel,room,2",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,59",
                "https://source.unsplash.com/400x300/?hotel,10",
                "https://source.unsplash.com/400x300/?hotel,99",
                "https://source.unsplash.com/400x300/?hotel,51"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 19852,
            rating: 3.62,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 8,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 16",
             hostJoinedOn: "May 2016",
             ameneties: [
                "Pets Allowed",
                "Kitchen",
                "Wifi"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "31e3fef0-9958-438f-b174-32cf43107a64",
            name: "Hotel 851",
            category: "Earth Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,3",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,27",
                "https://source.unsplash.com/400x300/?hotel,10",
                "https://source.unsplash.com/400x300/?hotel,98",
                "https://source.unsplash.com/400x300/?hotel,69"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 11526,
            rating: 4.15,
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 6,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 12",
             hostJoinedOn: "Sep 2023",
             ameneties: [
                "Wifi",
                "Parking"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "1fc1c1a3-6207-4416-9198-9e1120d65a06",
            name: "Hotel 305",
            category: "Tiny Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,66",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,94",
                "https://source.unsplash.com/400x300/?hotel,85",
                "https://source.unsplash.com/400x300/?hotel,24",
                "https://source.unsplash.com/400x300/?hotel,69"
            ],
            address: "Shimla",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            price: 18145,
            rating: 4.24,
            numberOfBathrooms: 4,
            numberOfBeds: 4,
            numberOfguest: 7,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 35",
             hostJoinedOn: "Jul 2016",
             ameneties: [
                "Pets Allowed",
                "Air Conditioning",
                "Kitchen"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "c30f2449-03ad-4d47-9c8b-ec1891898fee",
            name: "Hotel 260",
            category: "Treehouses",
            image: "https://source.unsplash.com/400x300/?hotel,room,42",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,71",
                "https://source.unsplash.com/400x300/?hotel,2",
                "https://source.unsplash.com/400x300/?hotel,73",
                "https://source.unsplash.com/400x300/?hotel,99"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 7484,
            rating: 4.69,
            numberOfBathrooms: 4,
            numberOfBeds: 3,
            numberOfguest: 6,
             numberOfBedrooms: 4,
             numberOfStudies: 2,
             hostName: "Host 1",
             hostJoinedOn: "Aug 2018",
             ameneties: [
                "Kitchen",
                "Swimming Pool",
                "Air Conditioning",
                "Parking",
                "Wifi"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "9f80c01d-5402-4c2e-ad02-ecd2286380b4",
            name: "Hotel 536",
            category: "Treehouses",
            image: "https://source.unsplash.com/400x300/?hotel,room,50",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,48",
                "https://source.unsplash.com/400x300/?hotel,34",
                "https://source.unsplash.com/400x300/?hotel,73",
                "https://source.unsplash.com/400x300/?hotel,32"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 5371,
            rating: 5.0,
            numberOfBathrooms: 4,
            numberOfBeds: 3,
            numberOfguest: 5,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 12",
             hostJoinedOn: "Dec 2018",
             ameneties: [
                "Wifi",
                "Pets Allowed",
                "Kitchen",
                "Air Conditioning",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "68725d67-0127-48fd-8490-b6e3de38818d",
            name: "Hotel 295",
            category: "Countryside",
            image: "https://source.unsplash.com/400x300/?hotel,room,83",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,87",
                "https://source.unsplash.com/400x300/?hotel,79",
                "https://source.unsplash.com/400x300/?hotel,72",
                "https://source.unsplash.com/400x300/?hotel,52"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 12698,
            rating: 4.78,
            numberOfBathrooms: 3,
            numberOfBeds: 3,
            numberOfguest: 5,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 8",
             hostJoinedOn: "Mar 2021",
             ameneties: [
                "Kitchen",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "eb4dea87-17cc-4543-b058-f8f7d2f327b1",
            name: "Hotel 871",
            category: "Cabins",
            image: "https://source.unsplash.com/400x300/?hotel,room,99",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,49",
                "https://source.unsplash.com/400x300/?hotel,2",
                "https://source.unsplash.com/400x300/?hotel,27",
                "https://source.unsplash.com/400x300/?hotel,69"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 4571,
            rating: 4.25,
            numberOfBathrooms: 2,
            numberOfBeds: 3,
            numberOfguest: 6,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 11",
             hostJoinedOn: "Jun 2023",
             ameneties: [
                "Kitchen",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "a3cfda98-62bd-47c7-92e4-07a086068b26",
            name: "Hotel 325",
            category: "Cabins",
            image: "https://source.unsplash.com/400x300/?hotel,room,34",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,55",
                "https://source.unsplash.com/400x300/?hotel,73",
                "https://source.unsplash.com/400x300/?hotel,20",
                "https://source.unsplash.com/400x300/?hotel,23"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 7193,
            rating: 3.96,
            numberOfBathrooms: 4,
            numberOfBeds: 1,
            numberOfguest: 2,
             numberOfBedrooms: 2,
             numberOfStudies: 2,
             hostName: "Host 18",
             hostJoinedOn: "Apr 2018",
             ameneties: [
                "Air Conditioning",
                "Swimming Pool",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "e6a90d38-a471-495f-b5e2-e20730ec8ed9",
            name: "Hotel 956",
            category: "Lakefront",
            image: "https://source.unsplash.com/400x300/?hotel,room,100",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,8",
                "https://source.unsplash.com/400x300/?hotel,71",
                "https://source.unsplash.com/400x300/?hotel,68",
                "https://source.unsplash.com/400x300/?hotel,96"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 12901,
            rating: 4.65,
            numberOfBathrooms: 4,
            numberOfBeds: 3,
            numberOfguest: 6,
             numberOfBedrooms: 3,
             numberOfStudies: 2,
             hostName: "Host 23",
             hostJoinedOn: "Jan 2021",
             ameneties: [
                "Kitchen",
                "Pets Allowed",
                "Air Conditioning",
                "Swimming Pool",
                "Wifi"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "8907a5e0-e1f0-4980-a203-e82d9d5f70d4",
            name: "Hotel 833",
            category: "Luxe",
            image: "https://source.unsplash.com/400x300/?hotel,room,18",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,37",
                "https://source.unsplash.com/400x300/?hotel,21",
                "https://source.unsplash.com/400x300/?hotel,31",
                "https://source.unsplash.com/400x300/?hotel,70"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 16420,
            rating: 4.95,
            numberOfBathrooms: 5,
            numberOfBeds: 1,
            numberOfguest: 6,
             numberOfBedrooms: 2,
             numberOfStudies: 2,
             hostName: "Host 9",
             hostJoinedOn: "Nov 2018",
             ameneties: [
                "Wifi",
                "Pets Allowed",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "ed254d5f-25fb-4d86-beac-6f5b71bb8744",
            name: "Hotel 953",
            category: "Campervans",
            image: "https://source.unsplash.com/400x300/?hotel,room,37",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,25",
                "https://source.unsplash.com/400x300/?hotel,42",
                "https://source.unsplash.com/400x300/?hotel,76",
                "https://source.unsplash.com/400x300/?hotel,25"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 5798,
            rating: 4.89,
            numberOfBathrooms: 5,
            numberOfBeds: 4,
            numberOfguest: 5,
             numberOfBedrooms: 2,
             numberOfStudies: 0,
             hostName: "Host 12",
             hostJoinedOn: "Jan 2020",
             ameneties: [
                "Swimming Pool",
                "Parking"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "058734d4-6760-4ffb-8277-5a9f70539b31",
            name: "Hotel 832",
            category: "A-frames",
            image: "https://source.unsplash.com/400x300/?hotel,room,20",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,54",
                "https://source.unsplash.com/400x300/?hotel,16",
                "https://source.unsplash.com/400x300/?hotel,95",
                "https://source.unsplash.com/400x300/?hotel,68"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 19677,
            rating: 3.79,
            numberOfBathrooms: 2,
            numberOfBeds: 3,
            numberOfguest: 3,
             numberOfBedrooms: 4,
             numberOfStudies: 2,
             hostName: "Host 40",
             hostJoinedOn: "Dec 2018",
             ameneties: [
                "Air Conditioning",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "37b56534-2075-4974-ba82-a2baac1c2180",
            name: "Hotel 915",
            category: "Iconic Sites",
            image: "https://source.unsplash.com/400x300/?hotel,room,71",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,54",
                "https://source.unsplash.com/400x300/?hotel,92",
                "https://source.unsplash.com/400x300/?hotel,39",
                "https://source.unsplash.com/400x300/?hotel,30"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 18105,
            rating: 4.51,
            numberOfBathrooms: 2,
            numberOfBeds: 4,
            numberOfguest: 8,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 41",
             hostJoinedOn: "Jul 2022",
             ameneties: [
                "Swimming Pool",
                "Wifi"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "Nearby water body",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "9284a46c-3ce5-4e73-a7a6-6ab3438f24c3",
            name: "Hotel 498",
            category: "Campervans",
            image: "https://source.unsplash.com/400x300/?hotel,room,62",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,72",
                "https://source.unsplash.com/400x300/?hotel,25",
                "https://source.unsplash.com/400x300/?hotel,17",
                "https://source.unsplash.com/400x300/?hotel,2"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 15511,
            rating: 4.86,
            numberOfBathrooms: 1,
            numberOfBeds: 1,
            numberOfguest: 8,
             numberOfBedrooms: 2,
             numberOfStudies: 0,
             hostName: "Host 30",
             hostJoinedOn: "Feb 2022",
             ameneties: [
                "Wifi",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "23419c48-facd-4f85-b08c-d4401129f52a",
            name: "Hotel 636",
            category: "Amazing Views",
            image: "https://source.unsplash.com/400x300/?hotel,room,60",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,73",
                "https://source.unsplash.com/400x300/?hotel,11",
                "https://source.unsplash.com/400x300/?hotel,34",
                "https://source.unsplash.com/400x300/?hotel,20"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 10283,
            rating: 3.54,
            numberOfBathrooms: 2,
            numberOfBeds: 4,
            numberOfguest: 6,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 16",
             hostJoinedOn: "Dec 2017",
             ameneties: [
                "Air Conditioning",
                "Parking",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "dbd8c7a9-f82e-45dc-988d-1969ad1bff90",
            name: "Hotel 434",
            category: "Amazing Views",
            image: "https://source.unsplash.com/400x300/?hotel,room,74",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,62",
                "https://source.unsplash.com/400x300/?hotel,67",
                "https://source.unsplash.com/400x300/?hotel,60",
                "https://source.unsplash.com/400x300/?hotel,69"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 10202,
            rating: 4.74,
            numberOfBathrooms: 2,
            numberOfBeds: 3,
            numberOfguest: 1,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 2",
             hostJoinedOn: "Jun 2019",
             ameneties: [
                "Parking",
                "Air Conditioning",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "5004738a-faab-49e8-b7ea-633ba66cfc33",
            name: "Hotel 385",
            category: "Amazing Views",
            image: "https://source.unsplash.com/400x300/?hotel,room,63",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,16",
                "https://source.unsplash.com/400x300/?hotel,93",
                "https://source.unsplash.com/400x300/?hotel,35",
                "https://source.unsplash.com/400x300/?hotel,29"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 3197,
            rating: 4.85,
            numberOfBathrooms: 5,
            numberOfBeds: 3,
            numberOfguest: 3,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 18",
             hostJoinedOn: "Oct 2016",
             ameneties: [
                "Pets Allowed",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "797985bd-7a5e-46b0-b26f-29e0729c8362",
            name: "Hotel 626",
            category: "Bed & Breakfast",
            image: "https://source.unsplash.com/400x300/?hotel,room,19",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,34",
                "https://source.unsplash.com/400x300/?hotel,22",
                "https://source.unsplash.com/400x300/?hotel,85",
                "https://source.unsplash.com/400x300/?hotel,38"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 8723,
            rating: 4.11,
            numberOfBathrooms: 5,
            numberOfBeds: 4,
            numberOfguest: 6,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 39",
             hostJoinedOn: "Apr 2019",
             ameneties: [
                "Kitchen",
                "Wifi"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "5d9584df-43be-4242-aae9-673dacd99990",
            name: "Hotel 679",
            category: "Caves",
            image: "https://source.unsplash.com/400x300/?hotel,room,65",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,83",
                "https://source.unsplash.com/400x300/?hotel,47",
                "https://source.unsplash.com/400x300/?hotel,61",
                "https://source.unsplash.com/400x300/?hotel,57"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 6350,
            rating: 3.92,
            numberOfBathrooms: 2,
            numberOfBeds: 4,
            numberOfguest: 6,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 35",
             hostJoinedOn: "May 2019",
             ameneties: [
                "Air Conditioning",
                "Pets Allowed",
                "Parking",
                "Wifi",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "69d92854-cc42-4961-94fd-662a54c8a384",
            name: "Hotel 223",
            category: "Luxe",
            image: "https://source.unsplash.com/400x300/?hotel,room,15",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,51",
                "https://source.unsplash.com/400x300/?hotel,38",
                "https://source.unsplash.com/400x300/?hotel,3",
                "https://source.unsplash.com/400x300/?hotel,69"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 8208,
            rating: 3.93,
            numberOfBathrooms: 5,
            numberOfBeds: 4,
            numberOfguest: 4,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 5",
             hostJoinedOn: "Jul 2022",
             ameneties: [
                "Kitchen",
                "Wifi",
                "Swimming Pool",
                "Pets Allowed",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: false
        },
        {
            id: "d71c95e5-a880-477a-b6a4-5723c8cd5fd5",
            name: "Hotel 602",
            category: "Amazing Views",
            image: "https://source.unsplash.com/400x300/?hotel,room,75",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,36",
                "https://source.unsplash.com/400x300/?hotel,15",
                "https://source.unsplash.com/400x300/?hotel,26",
                "https://source.unsplash.com/400x300/?hotel,83"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 2024,
            rating: 3.95,
            numberOfBathrooms: 5,
            numberOfBeds: 4,
            numberOfguest: 6,
             numberOfBedrooms: 3,
             numberOfStudies: 0,
             hostName: "Host 12",
             hostJoinedOn: "Jun 2017",
             ameneties: [
                "Kitchen",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "30b68b93-cb11-40a1-86e9-d685104174b8",
            name: "Hotel 854",
            category: "Castle",
            image: "https://source.unsplash.com/400x300/?hotel,room,25",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,38",
                "https://source.unsplash.com/400x300/?hotel,25",
                "https://source.unsplash.com/400x300/?hotel,5",
                "https://source.unsplash.com/400x300/?hotel,75"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 6497,
            rating: 4.63,
            numberOfBathrooms: 3,
            numberOfBeds: 2,
            numberOfguest: 6,
             numberOfBedrooms: 3,
             numberOfStudies: 2,
             hostName: "Host 1",
             hostJoinedOn: "Jun 2018",
             ameneties: [
                "Wifi",
                "Air Conditioning",
                "Parking"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "680a7c41-efe8-46e4-ac98-6f0a85960e41",
            name: "Hotel 742",
            category: "Amazing Views",
            image: "https://source.unsplash.com/400x300/?hotel,room,43",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,77",
                "https://source.unsplash.com/400x300/?hotel,66",
                "https://source.unsplash.com/400x300/?hotel,2",
                "https://source.unsplash.com/400x300/?hotel,51"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 6538,
            rating: 4.97,
            numberOfBathrooms: 5,
            numberOfBeds: 3,
            numberOfguest: 7,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 3",
             hostJoinedOn: "Dec 2017",
             ameneties: [
                "Pets Allowed",
                "Air Conditioning",
                "Kitchen",
                "Swimming Pool",
                "Parking"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "7bc25485-03bb-480c-88f2-6c9b62f9230f",
            name: "Hotel 321",
            category: "Bed & Breakfast",
            image: "https://source.unsplash.com/400x300/?hotel,room,10",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,8",
                "https://source.unsplash.com/400x300/?hotel,39",
                "https://source.unsplash.com/400x300/?hotel,19",
                "https://source.unsplash.com/400x300/?hotel,80"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 19576,
            rating: 4.01,
            numberOfBathrooms: 3,
            numberOfBeds: 1,
            numberOfguest: 5,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 13",
             hostJoinedOn: "Aug 2023",
             ameneties: [
                "Wifi",
                "Swimming Pool",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "dc158485-a450-4b7c-b02c-bcc78294b3a9",
            name: "Hotel 815",
            category: "Farms",
            image: "https://source.unsplash.com/400x300/?hotel,room,83",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,41",
                "https://source.unsplash.com/400x300/?hotel,1",
                "https://source.unsplash.com/400x300/?hotel,85",
                "https://source.unsplash.com/400x300/?hotel,37"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 15140,
            rating: 4.84,
            numberOfBathrooms: 5,
            numberOfBeds: 3,
            numberOfguest: 4,
             numberOfBedrooms: 4,
             numberOfStudies: 1,
             hostName: "Host 6",
             hostJoinedOn: "Nov 2020",
             ameneties: [
                "Pets Allowed",
                "Air Conditioning",
                "Kitchen"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "ad2b4537-b526-48d6-8b68-641849c0ebd5",
            name: "Hotel 324",
            category: "Countryside",
            image: "https://source.unsplash.com/400x300/?hotel,room,77",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,27",
                "https://source.unsplash.com/400x300/?hotel,33",
                "https://source.unsplash.com/400x300/?hotel,17",
                "https://source.unsplash.com/400x300/?hotel,44"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 4822,
            rating: 4.16,
            numberOfBathrooms: 5,
            numberOfBeds: 4,
            numberOfguest: 4,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 12",
             hostJoinedOn: "Mar 2018",
             ameneties: [
                "Wifi",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "80fc3132-44c9-4807-8bc6-9ab05a6dd1b9",
            name: "Hotel 377",
            category: "Bed & Breakfast",
            image: "https://source.unsplash.com/400x300/?hotel,room,5",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,41",
                "https://source.unsplash.com/400x300/?hotel,18",
                "https://source.unsplash.com/400x300/?hotel,15",
                "https://source.unsplash.com/400x300/?hotel,53"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 6526,
            rating: 4.88,
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 8,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 11",
             hostJoinedOn: "Nov 2015",
             ameneties: [
                "Wifi",
                "Parking",
                "Pets Allowed",
                "Kitchen",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "63b7487e-deb4-41c9-915e-432af2667c41",
            name: "Hotel 346",
            category: "Bed & Breakfast",
            image: "https://source.unsplash.com/400x300/?hotel,room,31",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,72",
                "https://source.unsplash.com/400x300/?hotel,91",
                "https://source.unsplash.com/400x300/?hotel,89",
                "https://source.unsplash.com/400x300/?hotel,20"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 16069,
            rating: 4.97,
            numberOfBathrooms: 5,
            numberOfBeds: 4,
            numberOfguest: 2,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 4",
             hostJoinedOn: "Mar 2018",
             ameneties: [
                "Air Conditioning",
                "Kitchen",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "1e72d3e6-833c-4e0c-857b-cc653ec0c19f",
            name: "Hotel 142",
            category: "Golfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,18",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,27",
                "https://source.unsplash.com/400x300/?hotel,43",
                "https://source.unsplash.com/400x300/?hotel,18",
                "https://source.unsplash.com/400x300/?hotel,90"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 17093,
            rating: 3.59,
            numberOfBathrooms: 4,
            numberOfBeds: 4,
            numberOfguest: 5,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 37",
             hostJoinedOn: "Apr 2021",
             ameneties: [
                "Parking",
                "Pets Allowed",
                "Kitchen"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "434e653d-6981-46a4-8439-af243e2a03f5",
            name: "Hotel 167",
            category: "Amazing Pools",
            image: "https://source.unsplash.com/400x300/?hotel,room,27",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,61",
                "https://source.unsplash.com/400x300/?hotel,37",
                "https://source.unsplash.com/400x300/?hotel,41",
                "https://source.unsplash.com/400x300/?hotel,13"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 16393,
            rating: 4.5,
            numberOfBathrooms: 3,
            numberOfBeds: 3,
            numberOfguest: 1,
             numberOfBedrooms: 1,
             numberOfStudies: 0,
             hostName: "Host 4",
             hostJoinedOn: "May 2022",
             ameneties: [
                "Kitchen",
                "Wifi",
                "Parking"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "62ad5bd2-402e-4e6f-bda1-ff32f9839bc4",
            name: "Hotel 373",
            category: "Countryside",
            image: "https://source.unsplash.com/400x300/?hotel,room,87",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,71",
                "https://source.unsplash.com/400x300/?hotel,44",
                "https://source.unsplash.com/400x300/?hotel,37",
                "https://source.unsplash.com/400x300/?hotel,85"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 3518,
            rating: 3.84,
            numberOfBathrooms: 2,
            numberOfBeds: 3,
            numberOfguest: 5,
             numberOfBedrooms: 4,
             numberOfStudies: 2,
             hostName: "Host 31",
             hostJoinedOn: "Nov 2019",
             ameneties: [
                "Parking",
                "Wifi",
                "Kitchen",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "d384101b-9839-4bf9-814a-1663e7b538b3",
            name: "Hotel 697",
            category: "Golfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,56",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,41",
                "https://source.unsplash.com/400x300/?hotel,91",
                "https://source.unsplash.com/400x300/?hotel,12",
                "https://source.unsplash.com/400x300/?hotel,96"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 11974,
            rating: 3.91,
            numberOfBathrooms: 2,
            numberOfBeds: 2,
            numberOfguest: 4,
             numberOfBedrooms: 3,
             numberOfStudies: 1,
             hostName: "Host 44",
             hostJoinedOn: "May 2016",
             ameneties: [
                "Kitchen",
                "Air Conditioning",
                "Wifi",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "1b884ee5-7bf4-400f-9b99-c6cfb868b446",
            name: "Hotel 640",
            category: "Surfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,34",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,20",
                "https://source.unsplash.com/400x300/?hotel,66",
                "https://source.unsplash.com/400x300/?hotel,53",
                "https://source.unsplash.com/400x300/?hotel,21"
            ],
            address: "Darjeeling",
            city: "Darjeeling",
            state: "West Bengal",
            country: "India",
            price: 17080,
            rating: 3.86,
            numberOfBathrooms: 1,
            numberOfBeds: 1,
            numberOfguest: 3,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 14",
             hostJoinedOn: "Mar 2019",
             ameneties: [
                "Swimming Pool",
                "Parking",
                "Wifi",
                "Kitchen"
            ],
            healthAndSafety: [
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: false
        },
        {
            id: "d9b6f8f8-af41-4eb8-83b3-70907032fd04",
            name: "Hotel 701",
            category: "Countryside",
            image: "https://source.unsplash.com/400x300/?hotel,room,99",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,76",
                "https://source.unsplash.com/400x300/?hotel,32",
                "https://source.unsplash.com/400x300/?hotel,51",
                "https://source.unsplash.com/400x300/?hotel,75"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 15374,
            rating: 3.99,
            numberOfBathrooms: 4,
            numberOfBeds: 4,
            numberOfguest: 1,
             numberOfBedrooms: 1,
             numberOfStudies: 1,
             hostName: "Host 3",
             hostJoinedOn: "Sep 2023",
             ameneties: [
                "Pets Allowed",
                "Swimming Pool",
                "Air Conditioning"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: true
        },
        {
            id: "855fdd82-ccc2-4801-ae20-bddf696e050f",
            name: "Hotel 848",
            category: "Surfing",
            image: "https://source.unsplash.com/400x300/?hotel,room,91",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,25",
                "https://source.unsplash.com/400x300/?hotel,71",
                "https://source.unsplash.com/400x300/?hotel,92",
                "https://source.unsplash.com/400x300/?hotel,26"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 6765,
            rating: 4.66,
            numberOfBathrooms: 5,
            numberOfBeds: 1,
            numberOfguest: 4,
             numberOfBedrooms: 2,
             numberOfStudies: 2,
             hostName: "Host 31",
             hostJoinedOn: "Nov 2022",
             ameneties: [
                "Swimming Pool",
                "Air Conditioning",
                "Kitchen",
                "Parking"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        },
        {
            id: "0ac52f7d-4702-4cfb-9628-4689b7f3c7a2",
            name: "Hotel 632",
            category: "Countryside",
            image: "https://source.unsplash.com/400x300/?hotel,room,59",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,93",
                "https://source.unsplash.com/400x300/?hotel,28",
                "https://source.unsplash.com/400x300/?hotel,87",
                "https://source.unsplash.com/400x300/?hotel,72"
            ],
            address: "Manali",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            price: 12931,
            rating: 3.9,
            numberOfBathrooms: 3,
            numberOfBeds: 1,
            numberOfguest: 1,
             numberOfBedrooms: 1,
             numberOfStudies: 2,
             hostName: "Host 12",
             hostJoinedOn: "Apr 2017",
             ameneties: [
                "Wifi",
                "Parking"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "e2e7d505-d592-44e6-82af-310283d420ae",
            name: "Hotel 180",
            category: "Farms",
            image: "https://source.unsplash.com/400x300/?hotel,room,63",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,56",
                "https://source.unsplash.com/400x300/?hotel,17",
                "https://source.unsplash.com/400x300/?hotel,68",
                "https://source.unsplash.com/400x300/?hotel,38"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 11616,
            rating: 4.7,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 3,
             numberOfBedrooms: 2,
             numberOfStudies: 0,
             hostName: "Host 49",
             hostJoinedOn: "Mar 2016",
             ameneties: [
                "Swimming Pool",
                "Wifi",
                "Parking"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: false
        },
        {
            id: "419e5396-7690-4937-a6b7-8048ac43c11e",
            name: "Hotel 708",
            category: "Farms",
            image: "https://source.unsplash.com/400x300/?hotel,room,58",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,38",
                "https://source.unsplash.com/400x300/?hotel,47",
                "https://source.unsplash.com/400x300/?hotel,86",
                "https://source.unsplash.com/400x300/?hotel,78"
            ],
            address: "Ooty",
            city: "Ooty",
            state: "Tamil Nadu",
            country: "India",
            price: 11695,
            rating: 4.12,
            numberOfBathrooms: 2,
            numberOfBeds: 3,
            numberOfguest: 7,
             numberOfBedrooms: 3,
             numberOfStudies: 2,
             hostName: "Host 41",
             hostJoinedOn: "Jun 2023",
             ameneties: [
                "Air Conditioning",
                "Wifi",
                "Parking"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "bd71f5fd-9a02-4b27-876d-9425a2047937",
            name: "Hotel 415",
            category: "Iconic Sites",
            image: "https://source.unsplash.com/400x300/?hotel,room,3",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,62",
                "https://source.unsplash.com/400x300/?hotel,61",
                "https://source.unsplash.com/400x300/?hotel,48",
                "https://source.unsplash.com/400x300/?hotel,26"
            ],
            address: "Kodaikanal",
            city: "Kodaikanal",
            state: "Tamil Nadu",
            country: "India",
            price: 13158,
            rating: 3.83,
            numberOfBathrooms: 4,
            numberOfBeds: 3,
            numberOfguest: 2,
             numberOfBedrooms: 4,
             numberOfStudies: 0,
             hostName: "Host 31",
             hostJoinedOn: "Aug 2022",
             ameneties: [
                "Kitchen",
                "Pets Allowed",
                "Swimming Pool"
            ],
            healthAndSafety: [
                "Nearby water body",
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Hotel",
             isCancelable: true
        },
        {
            id: "4a6360f3-f55e-4d7b-abde-4b79c15b7431",
            name: "Hotel 216",
            category: "Earth Homes",
            image: "https://source.unsplash.com/400x300/?hotel,room,59",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,44",
                "https://source.unsplash.com/400x300/?hotel,61",
                "https://source.unsplash.com/400x300/?hotel,22",
                "https://source.unsplash.com/400x300/?hotel,9"
            ],
            address: "Goa",
            city: "Goa",
            state: "Goa",
            country: "India",
            price: 7377,
            rating: 4.73,
            numberOfBathrooms: 4,
            numberOfBeds: 2,
            numberOfguest: 2,
             numberOfBedrooms: 2,
             numberOfStudies: 1,
             hostName: "Host 43",
             hostJoinedOn: "Sep 2015",
             ameneties: [
                "Wifi",
                "Parking"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Villa",
             isCancelable: true
        },
        {
            id: "e25a755d-3437-4628-8ae0-0387ae93f466",
            name: "Hotel 149",
            category: "Iconic Sites",
            image: "https://source.unsplash.com/400x300/?hotel,room,66",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,92",
                "https://source.unsplash.com/400x300/?hotel,65",
                "https://source.unsplash.com/400x300/?hotel,30",
                "https://source.unsplash.com/400x300/?hotel,16"
            ],
            address: "Munnar",
            city: "Munnar",
            state: "Kerala",
            country: "India",
            price: 19074,
            rating: 3.7,
            numberOfBathrooms: 4,
            numberOfBeds: 2,
            numberOfguest: 5,
             numberOfBedrooms: 2,
             numberOfStudies: 2,
             hostName: "Host 36",
             hostJoinedOn: "Jan 2016",
             ameneties: [
                "Wifi",
                "Pets Allowed",
                "Parking"
            ],
            healthAndSafety: [
                "No Carbon monoxide alarm",
                "Nearby water body",
                "No Smoke alarm"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Cottage",
             isCancelable: true
        },
        {
            id: "e616188a-3635-4826-a6a2-8e916710090f",
            name: "Hotel 101",
            category: "Farms",
            image: "https://source.unsplash.com/400x300/?hotel,room,57",
            imageArr: [
                "https://source.unsplash.com/400x300/?hotel,18",
                "https://source.unsplash.com/400x300/?hotel,85",
                "https://source.unsplash.com/400x300/?hotel,97",
                "https://source.unsplash.com/400x300/?hotel,60"
            ],
            address: "Jaipur",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            price: 7014,
            rating: 3.95,
            numberOfBathrooms: 4,
            numberOfBeds: 2,
            numberOfguest: 5,
             numberOfBedrooms: 3,
             numberOfStudies: 1,
             hostName: "Host 33",
             hostJoinedOn: "Apr 2020",
             ameneties: [
                "Parking",
                "Pets Allowed",
                "Wifi",
                "Kitchen"
            ],
            healthAndSafety: [
                "Nearby water body"
            ],
             houseRules: [
                "Check-in: After 2:00 pm",
                "Check out: 11:00 am",
                "No smoking",
                "No parties or events"
            ],
             propertyType: "Resort",
             isCancelable: false
        }
    ]
}

module.exports = hotels;