import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Landing, Error, Register, ProtectedRoute } from "./pages";

import { Profile, AddJob, AllJobs, Stats, SharedLayout } from "./pages/dashboard"

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-sky-100 md:px-0">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          } >
            <Route index element={<Stats />} />
            <Route path="all-jobs" element={<AllJobs />} />
            <Route path="add-job" element={<AddJob />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="landing" element={<Landing />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <ToastContainer position='top-center' className="capitalize" />
      </BrowserRouter>
    </div>
  );
}

export default App;
