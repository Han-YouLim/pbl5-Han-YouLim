import React, {useEffect, useState} from 'react';

import Section from '../../../HOC/Section';
import bgImage from '../../../assets/img/swuImage.png';
import axios from 'axios';

const ALLOW_FILE_EXTENSION = ["mp4"]

const home = () => {
  const [file, setFile] = useState()

  function onChangeFileInput(event) {
    console.log(event)
    setFile(event.target.files[0])
    if(event.target.files.length>0){
      console.log("여영" + JSON.stringify(event.target.files[0].name))
    }
  }

  function onClickSubmit(event) {
    console.log("diq")
    event.preventDefault()
    const url = 'http://localhost:3000/uploadFile';
    let formData = new FormData();
    if(file){
      const inputExtension = file.name.substr(file.name.indexOf('.')).replace(".","")
      // 파일 확장자 체크
      if(ALLOW_FILE_EXTENSION.includes(inputExtension)) {
        const formData = new FormData();
        formData.append("file", file);
        const config = {
          headers: {
            'content-type': 'multipart/form-data',
            "Access-Control-Allow-Origin": "*",
          },
        };
        axios.post(url, formData, config).then((res) => {
          console.log("SUCCESS!")
          console.log(res.data);
        });

      }else{
        alert(`This is not an uploadable extension. Please choose again. [only "${ALLOW_FILE_EXTENSION}"]`)
        return;
      }
    }else{
      alert("Please select a video to upload.")
    }
  }

  return (
    <Section id='home'>
      <div>
        <div
          className='home-content p-5'
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className='intro container text-center text-light'>
            <h1 className='title'>WELCOME</h1>
            <h2 className='sub-title mb-4'>
              Upload Video Here And Re-create A Safe Video!
            </h2>
            <div classes='btn btn-primary rounded-0 mr-2'>
              <form method="post" action="upload_process.php" enctype="multipart/form-data" onSubmit={onClickSubmit}>
                <input type="file" style={{backgroundColor:"#969696", opacity:"0.7"}} onChange={onChangeFileInput}/>
                <button type="submit">Upload</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default home;
