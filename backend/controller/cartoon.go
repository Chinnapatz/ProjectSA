package controller

import (
	"net/http"
	"time"

	"github.com/Chinnapatz/ProjectSA/entity"
	"github.com/gin-gonic/gin"
)

func CreateSeries(c *gin.Context) {
	var cartoon entity.Cartoon
	var member entity.Member
	
	idMember := c.Param("ID")

	if err := entity.DB().Raw("SELECT * FROM members WHERE id = ?", idMember).Scan(&member).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := c.ShouldBindJSON(&cartoon); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	 series := entity.Cartoon{
		MemberID: 				&member.ID,
		Title: 					cartoon.Title,
		Catagories: 			cartoon.Catagories,
		Summary: 				cartoon.Summary,
		Square_Thumbnail: 		cartoon.Square_Thumbnail,
		Vertical_Thumbnail:		cartoon.Vertical_Thumbnail,
		Datetime: 				time.Now(),	
		
	 }
	if err := entity.DB().Create(&series).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": series})
}


func GetCartoon(c *gin.Context) {
	var cartoon []entity.Cartoon
	idMember := c.Param("ID")
	if err := entity.DB().Raw("SELECT * FROM cartoons WHERE member_id=?",idMember).Find(&cartoon).Error; err != nil{
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data":cartoon})
}
