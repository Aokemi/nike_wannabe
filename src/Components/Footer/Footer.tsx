import React from 'react';
import {
  FooterContainer,
  FooterSection,
  FooterTitle,
  FooterLink,
  FooterBottom,
  FooterBottomText,
} from './style';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <FooterTitle>Ressources</FooterTitle>
        <FooterLink href="#">Cartes cadeaux</FooterLink>
        <FooterLink href="#">Cartes cadeaux d'entreprise</FooterLink>
        <FooterLink href="#">Trouver un magasin</FooterLink>
        <FooterLink href="#">Nike Journal</FooterLink>
        <FooterLink href="#">Devenir membre</FooterLink>
        <FooterLink href="#">Réduction pour étudiants</FooterLink>
        <FooterLink href="#">Commentaires</FooterLink>
        <FooterLink href="#">Codes promo</FooterLink>
      </FooterSection>

      <FooterSection>
        <FooterTitle>Aide</FooterTitle>
        <FooterLink href="#">Statut de la commande</FooterLink>
        <FooterLink href="#">Expédition et livraison</FooterLink>
        <FooterLink href="#">Retours</FooterLink>
        <FooterLink href="#">Modes de paiement</FooterLink>
        <FooterLink href="#">Nous contacter</FooterLink>
        <FooterLink href="#">Avis</FooterLink>
        <FooterLink href="#">Aide - Codes promo Nike</FooterLink>
      </FooterSection>

      <FooterSection>
        <FooterTitle>Entreprise</FooterTitle>
        <FooterLink href="#">À propos de Nike</FooterLink>
        <FooterLink href="#">Actualités</FooterLink>
        <FooterLink href="#">Carrières</FooterLink>
        <FooterLink href="#">Investisseurs</FooterLink>
        <FooterLink href="#">Développement durable</FooterLink>
        <FooterLink href="#">Accessibilité: partiellement conforme</FooterLink>
        <FooterLink href="#">Mission</FooterLink>
        <FooterLink href="#">Signaler un problème</FooterLink>
      </FooterSection>

      <FooterSection>
        <FooterTitle>Guides</FooterTitle>
        <FooterLink href="#">Conditions d'utilisation</FooterLink>
        <FooterLink href="#">Conditions générales de vente</FooterLink>
        <FooterLink href="#">Informations sur l'entreprise</FooterLink>
        <FooterLink href="#">Politique de confidentialité et de gestion des cookies</FooterLink>
        <FooterLink href="#">Paramètres de confidentialité et de cookies</FooterLink>
      </FooterSection>

      <FooterBottom>
        <FooterBottomText>France</FooterBottomText>
        <FooterBottomText>© 2025 Nike, Inc. Tous droits réservés</FooterBottomText>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
