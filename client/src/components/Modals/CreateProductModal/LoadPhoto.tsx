import { FC } from 'react';
import axios, { baseURL } from '../../../api';
import { Plus, Trash2 } from 'lucide-react';

interface IProps {
  setImgLink: (a: string) => void;
  imgLink: string;
}

export const LoadPhoto: FC<IProps> = ({ setImgLink, imgLink }) => {
  const loadFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('image', file);

      try {
        const { data } = await axios.post('/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setImgLink(data.url);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <>
      {imgLink.length ? (
        <div className="file-remove">
          <span className="remove-btn" onClick={() => setImgLink('')}>
            <Trash2 />
          </span>
          <img src={baseURL + imgLink} className="file-img" />
        </div>
      ) : (
        <div className="add-img" title="Loading Image">
          <Plus />
          <input type="file" accept="image/png, image/jpeg" onChange={(e) => loadFile(e)} />
        </div>
      )}
    </>
  );
};
