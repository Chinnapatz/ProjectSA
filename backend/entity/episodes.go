package entity

import "gorm.io/gorm"

type Episodes struct {
	gorm.Model
	Title		string		`gorm:"uniqueIndex"`
	Picture		[]uint8
	Status		bool
	Ep_number	int	 
	Price		int

}