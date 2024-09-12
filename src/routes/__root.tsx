import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="text-red-500 font-bold text-xl">Routeですよ</div>
      <div className="flex gap-2">
        <Link to="/" className="[&.active]:text-blue-700">
          Home
        </Link>
        <Link to="/about" className="[&.active]:text-blue-700">
          About
        </Link>

      </div>
      <Outlet />
    </>
  )
})