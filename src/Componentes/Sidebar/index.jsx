import PersonIcon from '@mui/icons-material/Person';

const Sidebar = () => {
    return (
     <div className="mt-20 flex flex-col justify-center items-center bg-gray-100 pt-4 pb-4">
          <div className="bg-roxoIntenso p-2 w-24 rounded-md">
            <PersonIcon sx={{ fontSize: 80, color: '#FFFFFF', "&:hover": {color: '#BF3B91'}, cursor: 'pointer' }}/>
          </div>
        <h3 className='font-bold mt-2' > Fulano de Tal </h3>
        <div className='w-full bg-orange-300 mt-2 p-2'>
         <h3 className='font-bold'>Biografia</h3>
         <p className='mt-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, dolore, cupiditate accusantium minus neque officia veritatis harum molestias eos qui cum ipsam quibusdam dolorum ab perspiciatis labore quia unde. Amet.
         </p>
        </div>
        <div className='w-full p-2'>
              <h4 className='font-bold'>De Nárnia</h4>
        </div>
        <div className='w-full p-2'>
              <h4 className='font-bold'>Melhores Amigos</h4>
              <div className='flex gap-2'>
                  <div className="bg-roxoIntenso p-2 w-14 rounded-md mt-2">
                    <PersonIcon sx={{ fontSize: 40, color: '#FFFFFF', "&:hover": {color: '#BF3B91'}, cursor: 'pointer' }}/>
                  </div>
                  <div className="bg-roxoIntenso p-2 w-14 rounded-md mt-2">
                    <PersonIcon sx={{ fontSize: 40, color: '#FFFFFF', "&:hover": {color: '#BF3B91'}, cursor: 'pointer' }}/>
                  </div>
                  <div className="bg-roxoIntenso p-2 w-14 rounded-md mt-2">
                    <PersonIcon sx={{ fontSize: 40, color: '#FFFFFF', "&:hover": {color: '#BF3B91'}, cursor: 'pointer' }}/>
                  </div>
                  <div className="bg-roxoIntenso p-2 w-14 rounded-md mt-2">
                    <PersonIcon sx={{ fontSize: 40, color: '#FFFFFF', "&:hover": {color: '#BF3B91'}, cursor: 'pointer' }}/>
                  </div>
                  <div className="bg-roxoIntenso p-2 w-14 rounded-md mt-2">
                    <PersonIcon sx={{ fontSize: 40, color: '#FFFFFF', "&:hover": {color: '#BF3B91'}, cursor: 'pointer' }}/>
                  </div>
              </div>
        </div>
     </div>


    )
}

export default Sidebar 