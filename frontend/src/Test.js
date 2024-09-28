// import React, { useEffect, useState } from 'react';
// import { Card, Col, Image } from 'react-bootstrap';
// import RecipeCard from './RecipeCard';

// const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

// export function HomeTest() {
//     const [isLoading, setIsLoading] = useState(false);
//     const [query, setQuery] = useState('');
//     const [recipes, setRecipes] = useState([]);

//     const searchRecipes = async () => {
//         setIsLoading(true);
//         try {
//             const url = apiUrl + query;
//             const res = await fetch(url);
//             const data = await res.json();
//             setRecipes(data.meals || []);
//         } catch (error) {
//             console.error('Error fetching recipes:', error);
//             setRecipes([]);
//         }
//         setIsLoading(false);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         searchRecipes(query);
//     };

//     useEffect(() => {
//         searchRecipes('chicken');
//     }, []);




//     return (
//         <div style={{ backgroundColor: '#f0f8ff', minHeight: '100vh' }}>
//             <div className="container ">
//                 <h2 className="justify-content">Cook Book</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <input
//                             type="text"
//                             value={query}
//                             onChange={(e) => setQuery(e.target.value)}
//                             placeholder="Search for recipes..."
//                             className="form-control"
//                         />
//                     </div>
//                     <button type="submit" className="btn btn-primary mb-4">
//                         Search
//                     </button>
//                 </form>
//                 {isLoading ? (
//                     <p>Loading...</p>
//                 ) : (
//                     <div className="row">
//                         {recipes.length > 0 ? (
//                             recipes.map((recipe) => (
//                                 <RecipeCard key={recipe.idMeal} recipe={recipe} />
//                             ))
//                         ) : (
//                             <p>No recipes found</p>
//                         )}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }