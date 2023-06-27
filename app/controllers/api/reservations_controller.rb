class Api::ReservationsController < ApplicationController
    wrap_parameters include: Reservation.attribute_names
    before_action :require_logged_in, only: [:index, :show, :create, :update, :delete]

    def index
        @reservations = Reservation.all
        if @reservations
            render :index
        else
            render json: {errors: ['No Reservations selected']}
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
        if @reservation.save
            render :show
        else
            render json: {errors: ['Reservation failed to create']}
        end
    end
    
    def update
        @reservation = Reservation.find(params[:id])
        if @reservation.update(reservations)
            render :show
        else
            render json: {errors: ['Update not saved']}
        end
    end

    def delete
        @reservation = Reservation.find(params[:id])
        @reservation.destroy
        render :show
    end


    private

    def reservation_params
        params.require(:reservation).permit(:num_guests, :date, :time)
    end
end
