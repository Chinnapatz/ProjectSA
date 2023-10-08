package controller

import (
	"net/http"

	"github.com/Chinnapatz/ProjectSA/entity"
	"github.com/gin-gonic/gin"
)

func CreateSeries(c *gin.Context) {
	var cartoon entity.Cartoon

	if err := c.ShouldBindJSON(&cartoon); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := entity.DB().Create(&cartoon).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": cartoon})
}
