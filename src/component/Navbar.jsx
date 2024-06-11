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
      <div className=" bg-green-400">
        <div className="py-1 px-3 m-0">
          <ul className="grid grid-cols-4 justify-between text-black text-center font-medium ">
            {allRoutesDeatails.map((data, index) => {
              return (
                <NavLink
                  key={index}
                  to={data.path}
                  className={({ isActive }) =>
                    isActive
                      ? ` border-b-4 rounded-b-sm  py-2 `
                      : `border-b-4 border-gray-100 hover:bg-gray-200 py-2  `
                  }
                >
                  {data.routeName}
                </NavLink>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
