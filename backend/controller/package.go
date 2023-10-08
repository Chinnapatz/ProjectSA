package controller

import (
	"net/http"

	"github.com/Chinnapatz/ProjectSA/entity"
	"github.com/gin-gonic/gin"
)

//GET /package
func PackageCoin(c *gin.Context) {
	var packageC []entity.Package
	if err := entity.DB().Raw("SELECT * FROM packages").Find(&packageC).Error; err != nil{
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data":packageC})
}