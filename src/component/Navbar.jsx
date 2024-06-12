import { NavLink } from 'react-router-dom';

const NavBar = () => {
  
  const allRoutesDeatails = [
    {
      path: '/',
      routeName: 'About Me',
    },
    {
      path: '/education',
      routeName: 'Education',
    },
    {
      path: '/project',
      routeName: 'Projects',
    },
    {
      path: '/contact',
      routeName: 'contacts',
    },
  ];
  return (
    <>
      {/* <div className=" bg-green-400">
        <div className="text-[#ffffff] m-0 "> */}

        <div
        className="bg-green-400  backdrop-filter 
        backdrop-blur-md sticky top-0 
        "
      >
        
           <ul className="grid grid-cols-4 justify-between  text-center font-medium ">
            {allRoutesDeatails.map((data, index) => {
              return (
                <NavLink
                  key={index}
                  to={data.path}
                  className={({ isActive }) =>
                    isActive
                      ? `   bg-[#474645] py-2 `
                      : ` hover:bg-[#9c9a98] py-2  `
                  }
                >
                  {data.routeName}
                </NavLink>
              );
            })}
          </ul>
        </div>
      


       
    </>
  );
};

export default NavBar;
