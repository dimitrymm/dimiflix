import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function App() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault>

      {dadosIniciais.lenght === 0 && (<div>Loading</div>)}

      {dadosIniciais.lenght >= 1 && (

        <>

          <BannerMain
            videoTitle={dadosIniciais[0].videos[0].titulo}
            url={dadosIniciais[0].videos[0].url}
            videoDescription=""
          />

          <Carousel
            ignoreFirstVideo
            category={dadosIniciais[0]}
          />

        </>
      )}

      <Carousel
        category={dadosIniciais.categorias[1]}
      />
      <Carousel
        category={dadosIniciais.categorias[2]}
      />
      <Carousel
        category={dadosIniciais.categorias[3]}
      />
      <Carousel
        category={dadosIniciais.categorias[4]}
      />
      <Carousel
        category={dadosIniciais.categorias[5]}
      />

    </PageDefault>
  );
}

export default App;
