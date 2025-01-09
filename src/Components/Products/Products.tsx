import React from 'react';
import { 
  ProductSectionContainer, 
  ProductCard, 
  ProductImage, 
  ProductDetails, 
  ProductTitle, 
  ProductDescription, 
  ProductButton 
} from './style';

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
}

const ProductSection: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTiB0FBYFGQk3wwbgd2aaryhxSqeON_G3dRzJCu1AJB29fCkUXZj0PrPkaHAOYnttNw-QPL7C4hrhIObOJgBAkVqdL5T8_SqW45uh9qTEB_9lTcxv7M8c31',
      title: 'Chaussure de Running',
      description: 'Conçue pour la performance et le confort.',
    },
    {
      id: 2,
      image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR-WZu8tm1exEuNsp6_SaYTE1MkGeGWmrgU5KMItlJ0J2ODu58003nanX24NdLlZSzfIkQr9C4nar05Gyor1A0DNbBJCw6Pp7nYolwwiR5rT1W8c4C1RDxw',
      title: 'Chaussure de Basket',
      description: 'Style et adhérence optimaux sur le terrain.',
    },
    {
      id: 3,
      image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQU1eLnlCShz5fWuY932oAIZUAeAJdhiY0b0RBxNWnPpTRMfTh-8Ly_ESaIsF7-wH0SJEVQkiwnR0CVR2vviI0wM1Vo4kf6WfD2dFbgTrjlClam1sGcqBQrUw',
      title: 'Chaussure Lifestyle',
      description: 'Un design iconique pour tous les jours.',
    },
  ];

  return (
    <ProductSectionContainer>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductImage src={product.image} alt={product.title} />
          <ProductDetails>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductButton>Voir le produit</ProductButton>
          </ProductDetails>
        </ProductCard>
      ))}
    </ProductSectionContainer>
  );
};

export default ProductSection;
