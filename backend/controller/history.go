package controller

import (
	"github.com/Chinnapatz/ProjectSA/entity"
	"github.com/gin-gonic/gin"
	"net/http"
	"time"
)

func CreateHistory(c *gin.Context) {
	var history entity.History
	var cartoon entity.Cartoon
	var member entity.Follow
	var episodes entity.Episodes
	if err := c.ShouldBindJSON(&history); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if tx := entity.DB().Where("id=?", cartoon.ID).Find(&cartoon); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "cartoon not found"})
		return
	}
	if tx := entity.DB().Where("id=?", member.ID).Find(&member); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "member not found"})
		return
	}
	his := entity.History{
		CartoonID:  &cartoon.ID,
		MemberID:   &member.ID,
		EpisodesID: &episodes.ID,
		Datetime:   time.Now(),
		Ep_number:  history.Ep_number,
	}
	if err := entity.DB().Create(&his).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": his})
}

// GET bookshelf/history
func ListHistory(c *gin.Context) {
	var follow []entity.Follow
	if err := entity.DB().Preload("Member").Preload("Cartoon").Raw("SELECT * FROM follows").Find(&follow).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": follow})
}

// GET bookshelf/history/:id
func GetCartoonHistoryByID(c *gin.Context) {
	var cartoon[]entity.Cartoon
	idMember := c.Param("ID")
	if err := entity.DB().Preload("Cartoon").Preload("Member").Preload("Episodes").Raw("SELECT * FROM cartoons WHERE id = (SELECT cartoon_id FROM follows WHERE member_id = ?)", idMember).Find(&cartoon).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": cartoon})
}