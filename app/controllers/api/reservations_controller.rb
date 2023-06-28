class Api::ReservationsController < ApplicationController
    wrap_parameters include: Reservation.attribute_names
    before_action :require_logged_in, only: [:index, :show, :create, :update, :destroy]

    def index
        @reservations = Reservation.includes(:user).where("reservation.user_id" == "user.id")
        if @reservations
            render :index
        else
            render json: {errors: ['No Reservations found']}
        end
    end

    def show
        @reservation = Reservation.find(params[:id])
        if @reservation
            render :show
        else
            render json: {errors: ['Reservation not found']}
        end
    end

    def create
        @reservation = Reservation.new(reservation_params)
        @reservation.user_id = current_user.id
        @reservation.bar_id = params[:bar_id]
        @reservation.num_guests = params[:num_guests]
        if @reservation.save
            render :show
        else
            render json: {errors: ['Reservation failed to create']}
        end
    end
    
    def update
        @reservation = Reservation.find(params[:id])
        if @reservation.update(reservations)
            debugger
            render :show
        else
            debugger
            render json: {errors: ['Update not saved']}
        end
    end

    def destroy
        @reservation = Reservation.find(params[:id])
        @reservation.destroy
        render :show
    end


    private

    def reservation_params
        params.require(:reservation).permit(:num_guests, :date, :time)
    end
end
