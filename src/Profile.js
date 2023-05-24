import profilePic from './img/profilePicture.jpg';
import editPencil from './img/pencil.svg';


const Profile = () => {



  return (
    <div className="min-h-1000 bg-gray-100 p-5">
      <div className="card bg-base-100 shadow-xl bg-white p-10">
        <div className="grid grid-cols-2 gap-4 pl-5">
          <div className="col-span-1">
            <div className="flex items-center mb-6">
              <span className="text-5xl font-bold text-violet">Profile Information</span>
              <img src={editPencil} alt="edit" className="w-8 h-8 ml-10" onClick={() => console.log("ELAH")}/>
            </div>


            <ul className="space-y-4 text-lg">
              <li><strong>Name:</strong> John Doe</li>
              <li><strong>Email:</strong> john.doe@example.com</li>
              <li><strong>Password:</strong> ••••••••</li>
              <li><strong>Cellpfone:</strong> +351 94353546</li>
              <li><strong>Country:</strong> Portugal</li>
              <li><strong>Sex:</strong> Male</li>
              <li><strong>Weight:</strong> 70 kg</li>
              <li><strong>Height:</strong> 180 cm</li>
              <li><strong>Allergies:</strong> None</li>
            </ul>

          </div>
          <div className="col-span-1">
            <div className="grid grid-rows-2 gap-4 h-full">
              <div className="row-span-3 flex justify-center items-start border-b-2 border-gray-500 pb-10">
                <img src={profilePic} alt="Profile" className="w-100 h-100 rounded-full mb-4" />
              </div>
              <div className="row-span-1">
                <div className="card">
                  <h2 className="text-2xl font-bold mb-4 text-violet">Medical History</h2>
                  <ul className="space-y-2">
                    <li>Medical History 1</li>
                    <li>Medical History 2</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;