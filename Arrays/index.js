// Task 1

// const newReleases = [
//   {
//     id: 70111470,
//     title: 'Die Hard',
//     boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
//     uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
//     rating: 4.0,
//     bookmark: [],
//   },
//   {
//     id: 654356453,
//     title: 'Bad Boys',
//     boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
//     uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
//     rating: 5.0,
//     bookmark: [{ id: 432534, time: 65876586 }],
//   },
//   {
//     id: 65432445,
//     title: 'The Chamber',
//     boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
//     uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
//     rating: 4.0,
//     bookmark: [],
//   },
//   {
//     id: 675465,
//     title: 'Fracture',
//     boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
//     uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
//     rating: 5.0,
//     bookmark: [{ id: 432534, time: 65876586 }],
//   },
// ];

// const videos = newReleases
//   .filter(({ rating }) => {
//     return rating == '5.0';
//   })
//   .map(({ id, title }) => {
//     return {
//       id: id,
//       title: title,
//     };
//   });

// alert(JSON.stringify(videos, null, 2));

// Task 2

// const movieLists = [
//   {
//     name: 'New Releases',
//     videos: [
//       {
//         id: 70111470,
//         title: 'Die Hard',
//         boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
//         uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
//         rating: 4.0,
//         bookmark: [],
//       },
//       {
//         id: 654356453,
//         title: 'Bad Boys',
//         boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
//         uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
//         rating: 5.0,
//         bookmark: [{ id: 432534, time: 65876586 }],
//       },
//     ],
//   },
//   {
//     name: 'Dramas',
//     videos: [
//       {
//         id: 65432445,
//         title: 'The Chamber',
//         boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
//         uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
//         rating: 4.0,
//         bookmark: [],
//       },
//       {
//         id: 675465,
//         title: 'Fracture',
//         boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
//         uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
//         rating: 5.0,
//         bookmark: [{ id: 432534, time: 65876586 }],
//       },
//     ],
//   },
// ];

// const VIDEOS = [];

// movieLists.forEach(({ name, videos }) => {
//   videos.forEach(({ id, title, rating }) => {
//     if (rating == '5.0') {
//       VIDEOS.push({
//         name: name,
//         id: id,
//         title: title,
//       });
//     }
//   });
// });

// alert(JSON.stringify(VIDEOS, null, 2));

// Task 3

// const movieLists = [
//   {
//     name: 'New Releases',
//     videos: [
//       {
//         id: 70111470,
//         title: 'Die Hard',
//         boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
//         uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
//         rating: 4.0,
//         bookmark: [],
//       },
//       {
//         id: 654356453,
//         title: 'Bad Boys',
//         boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
//         uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
//         rating: 5.0,
//         bookmark: [{ id: 432534, time: 65876586 }],
//       },
//     ],
//   },
//   {
//     name: 'Dramas',
//     videos: [
//       {
//         id: 65432445,
//         title: 'The Chamber',
//         boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
//         uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
//         rating: 4.0,
//         bookmark: [],
//       },
//       {
//         id: 675465,
//         title: 'Fracture',
//         boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
//         uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
//         rating: 5.0,
//         bookmark: [{ id: 432534, time: 65876586 }],
//       },
//     ],
//   },
// ];

// const RATED_MOVIES = [];
// movieLists.map(({ name, videos }) => {
//   return videos.map(({ id, title, rating }) => {
//     if (rating == '5.0') {
//       return RATED_MOVIES.push({
//         name: name,
//         id: id,
//         title: title,
//       });
//     }
//   });
// });
// const VIDEOS = [].concat.apply([], RATED_MOVIES);

// alert(JSON.stringify(VIDEOS, null, 2));

// Task 4

// const movieLists = [
//   {
//     name: 'Instant Queue',
//     videos: [
//       {
//         id: 70111470,
//         title: 'Die Hard',
//         boxarts: [
//           {
//             width: 150,
//             height: 200,
//             url: 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg',
//           },
//           {
//             width: 200,
//             height: 200,
//             url: 'http://cdn-0.nflximg.com/images/2891/DieHard200.jpg',
//           },
//         ],
//         url: 'http://api.netflix.com/catalog/titles/movies/70111470',
//         rating: 4.0,
//         bookmark: [],
//       },
//       {
//         id: 654356453,
//         title: 'Bad Boys',
//         boxarts: [
//           {
//             width: 200,
//             height: 200,
//             url: 'http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg',
//           },
//           {
//             width: 150,
//             height: 200,
//             url: 'http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg',
//           },
//         ],
//         url: 'http://api.netflix.com/catalog/titles/movies/70111470',
//         rating: 5.0,
//         bookmark: [{ id: 432534, time: 65876586 }],
//       },
//     ],
//   },
//   {
//     name: 'New Releases',
//     videos: [
//       {
//         id: 65432445,
//         title: 'The Chamber',
//         boxarts: [
//           {
//             width: 150,
//             height: 200,
//             url: 'http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg',
//           },
//           {
//             width: 200,
//             height: 200,

//             url: 'http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg',
//           },
//         ],
//         url: 'http://api.netflix.com/catalog/titles/movies/70111470',
//         rating: 4.0,
//         bookmark: [],
//       },
//       {
//         id: 675465,
//         title: 'Fracture',
//         boxarts: [
//           {
//             width: 200,
//             height: 200,
//             url: 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg',
//           },
//           {
//             width: 150,
//             height: 200,
//             url: 'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg',
//           },
//           {
//             width: 300,
//             height: 200,
//             url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg',
//           },
//         ],
//         url: 'http://api.netflix.com/catalog/titles/movies/70111470',
//         rating: 5.0,
//         bookmark: [{ id: 432534, time: 65876586 }],
//       },
//     ],
//   },
// ];

// const RATED_MOVIES = movieLists.map(({ videos }) => {
//   return videos.map(({ id, title, boxarts }) => {
//     return {
//       id: id,
//       title: title,
//       boxarts: boxarts
//         .filter(({ width }) => {
//           return width === 150;
//         })
//         .map(({ url }) => url)
//         .toString(),
//     };
//   });
// });
// const VIDEOS = [].concat.apply([], RATED_MOVIES);

// console.log(JSON.stringify(VIDEOS, null, 2));

// Task 5

// const boxarts = [
//   {
//     width: 200,
//     height: 200,
//     url: 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg',
//   },
//   {
//     width: 150,
//     height: 200,
//     url: 'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg',
//   },
//   {
//     width: 300,
//     height: 200,
//     url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg',
//   },
//   {
//     width: 425,
//     height: 150,
//     url: 'http://cdn-0.nflximg.com/images/2891/Fracture425.jpg',
//   },
// ];

// const findLargestBox = (array) => {
//   const areas = [];
//   array.forEach(({ width, height }) => {
//     areas.push(width * height);
//   });
//   const largestBoxIndex = areas.indexOf(Math.max(...areas));
//   return array[largestBoxIndex];
// };

// alert(JSON.stringify(findLargestBox(boxarts), null, 2));

// Task 6

// const boxarts = [
//   {
//     width: 200,
//     height: 200,
//     url: 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg',
//   },
//   {
//     width: 150,
//     height: 200,
//     url: 'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg',
//   },
//   {
//     width: 300,
//     height: 200,
//     url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg',
//   },
//   {
//     width: 425,
//     height: 150,
//     url: 'http://cdn-0.nflximg.com/images/2891/Fracture425.jpg',
//   },
// ];

// const findLargestBoxURL = (array) => {
//   const largestBox = array.reduce((previous_box, box) => {
//     return box.width * box.height > previous_box.width * previous_box.height
//       ? box
//       : previous_box;
//   }, array[0]);
//   return largestBox.url;
// };

// alert(findLargestBoxURL(boxarts));

// Task 7

// const videos = [
//   {
//     id: 65432445,
//     title: 'The Chamber',
//   },
//   {
//     id: 675465,
//     title: 'Fracture',
//   },
//   {
//     id: 70111470,
//     title: 'Die Hard',
//   },
//   {
//     id: 654356453,
//     title: 'Bad Boys',
//   },
// ];

// const combineVideos = (array) => {
//   return array.reduce((acc, { id, title }) => {
//     acc[id] = title;
//     return acc;
//   }, {});
// };

// alert(JSON.stringify(combineVideos(videos), null, 2));
