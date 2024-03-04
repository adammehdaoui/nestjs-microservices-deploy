# Utilisation d'une image de base minimale
FROM scratch

# Ajout d'un fichier texte de test
ADD test.txt /app/test.txt

# Commande par défaut à exécuter lorsque le conteneur démarre
CMD ["echo", "Image de test créée avec succès."]
