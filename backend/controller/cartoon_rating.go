package controller

import (
	"net/http"

	"github.com/Chinnapatz/ProjectSA/entity"
	"github.com/gin-gonic/gin"
)

func CreateRating(c *gin.Context) {
	// var follow entity.Follow
	var member entity.Member
	var cartoon entity.Cartoon
	idMember := c.Param("mem4RatingID")
	idCartoon := c.Param("toon4RatingID")


	// if err := c.ShouldBindJSON(&follow); err != nil {
	// 	c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	// 	return
	// }
	if tx := entity.DB().Where("id=?", idCartoon).Find(&cartoon); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "cartoon not found"})
		return
	}
	if tx := entity.DB().Where("id=?", idMember).Find(&member); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "member not found"})
		return
	}
	f := entity.Rating{
		MemberID:  &member.ID,
		CartoonID: &cartoon.ID,
	}
	if err := entity.DB().Create(&f).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": f})
}



// GET bookshelf/follow/:id
func GetCartoonRatingByID(c *gin.Context) {
	idCartoon := c.Param("cartonID")
	var cartoons entity.Cartoon
	if err := entity.DB().Preload("Member").Raw("SELECT * FROM cartoons WHERE id = ?",idCartoon).Find(&cartoons).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": cartoons})
}



