import React from 'react';

import { MainCol } from '../../row';
import { SecondGallery } from '../../gallery';
import { CopyField } from '../../copy-field';

import './gallery-section.scss';

const GallerySection: React.FC<any> = () => {
  return (
    <section className="gallery-section">
      <div className="container">
        <h2 className="title">Галерея с изображениями</h2>

        <MainCol
          content={
            'Все просто. Выводится столько фотографий сколько влезит на экран. Те что не влезли рассчитываются и выводится их количество над последней фотографией. По клику на эту подпись так же открывается увеличенное версия того изображения, над которым выводится подпись.'
          }
        />
        <SecondGallery />
        <MainCol
          content={
            'Для того, чтобы на странице мы выводили изображение фактического нужного размера, а не просто уменьшали заведомо большее изображения, есть такая возможность:'
          }
        />
        <CopyField
          className={'gallery-section__copy-field'}
          value={
            'https://test.octweb.ru/api/crop/media/uploads/gallery/gallery/6.jpeg?geometry=420x240&crop=center'
          }
        />
        <MainCol
          className="text-sm"
          content={
            'В параметре geometry можно задать размеры для изображения, а в crop выбрать тип кадрирования (center, top, bottom) или вообще его не указывать и тогда изображение пропорционально будет «вписано» в указнные размеры.'
          }
        />
      </div>
    </section>
  );
};

export { GallerySection };
